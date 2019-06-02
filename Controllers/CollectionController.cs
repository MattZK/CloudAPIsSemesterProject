using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CloudAPIsSemesterProject.Models;

namespace CloudAPIsSemesterProject.Controllers
{
  [Route("api/[controller]")]
  public class CollectionsController : Controller
  {
    public LibraryContext _context { get; set; }
    public CollectionsController(LibraryContext ctx)
    {
      _context = ctx;
    }

    /**
     * Get all the favorites lists
     */
    [HttpGet]
    public ActionResult<List<FavoritesList>> GetLists(int? page, string sort, int length = 5, string dir = "asc")
    {
      IQueryable<FavoritesList> query = _context.FavoritesList;

      query = sortQuery(query, page, sort, length, dir);

      return Ok(query.ToList());
    }

    /**
     * Get a favorites list by Id
     */
    [Route("{id}")]
    [HttpGet]
    public ActionResult<FavoritesList> GetList(int id)
    {
      FavoritesList query = _context.FavoritesList.Include(b => b.Places).SingleOrDefault(d => d.Id == id);
      if (query == null)
        return NotFound();
      return Ok(query);
    }

    /**
     * Add a favorites list
     */
    [HttpPost]
    public ActionResult<FavoritesList> AddList([FromBody] FavoritesList favoritesList)
    {
      _context.FavoritesList.Add(favoritesList);
      _context.SaveChanges();
      return Created("", favoritesList);
    }

    /**
     * Delete a favorites list by Id
     */
    [Route("{id}")]
    [HttpDelete]
    public ActionResult DeleteList(int id)
    {
      FavoritesList favoritesList = _context.FavoritesList.Find(id);
      if (favoritesList == null)
        return NotFound();
      _context.FavoritesList.Remove(favoritesList);
      _context.SaveChanges();
      return NoContent();
    }

    /**
     * Update a favorites list
     */
    [HttpPut]
    public ActionResult<FavoritesList> UpdateList([FromBody] FavoritesList favoritesList)
    {
      _context.FavoritesList.Update(favoritesList);
      _context.SaveChanges();
      return Created("", favoritesList);
    }

    private IQueryable<FavoritesList> sortQuery(IQueryable<FavoritesList> query, int? page, string sort, int length, string dir) {
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