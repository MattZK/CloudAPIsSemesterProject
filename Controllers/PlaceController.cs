using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CloudAPIsSemesterProject.Models;
using Microsoft.AspNetCore.Authorization;

namespace CloudAPIsSemesterProject.Controllers
{
  [Route("api/[controller]")]
  public class PlacesController : Controller
  {
    public LibraryContext _context { get; set; }
    public PlacesController(LibraryContext ctx)
    {
      _context = ctx;
    }

    /**
     * Get all the favorites lists
     */
    [HttpGet]
    public ActionResult<List<Place>> GetPlaces(int? page, string sort, int length = 5, string dir = "asc")
    {
      IQueryable<Place> query = _context.Places;

      query = sortQuery(query, page, sort, length, dir);

      return Ok(query.ToList());
    }

    /**
     * Get a place by Id
     */
    [Route("{id}")]
    [HttpGet]
    public ActionResult<Place> GetPlace(int id)
    {
      Place query = _context.Places.Find(id);
      if (query == null)
        return NotFound();
      return Ok(query);
    }

    /**
     * Add a place
     */
    [Route("{id}")]
    [HttpPost, Authorize]
    public ActionResult<Place> AddPlace(int id, [FromBody] Place place)
    {
      place.FavoritesListId = id;
      _context.Places.Add(place);
      _context.SaveChanges();
      return Created("", place);
    }

    /**
     * Delete a place by Id
     */
    [Route("{id}")]
    [HttpDelete, Authorize]
    public ActionResult DeletePlace(int id)
    {
      Place place = _context.Places.Find(id);
      if (place == null)
        return NotFound();
      _context.Places.Remove(place);
      _context.SaveChanges();
      return NoContent();
    }

    private IQueryable<Place> sortQuery(IQueryable<Place> query, int? page, string sort, int length, string dir) {
      if (!string.IsNullOrWhiteSpace(sort) && sort == "id")
      {
        if (dir == "desc")
          query = query.OrderByDescending(d => d.Id);
        else
          query = query.OrderBy(d => d.Id);
      }

      if (page.HasValue)
        query = query.Skip(page.Value * length);
      query = query.Take(length);

      return query;
    }
  }
}