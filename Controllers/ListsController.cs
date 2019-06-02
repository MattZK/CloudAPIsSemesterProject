using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CloudAPIsSemesterProject.Models;
using Microsoft.EntityFrameworkCore;

namespace CloudAPIsSemesterProject.Controllers
{
  [Route("api/[controller]")]
  public class ListsController : Controller
  {
    public LibraryContext _context { get; set; }
    public ListsController(LibraryContext ctx)
    {
      _context = ctx;
    }

    [HttpGet]
    public ActionResult<List<PlaceList>> GetLists()
    {
      return Ok(_context.PlaceList.ToList());
    }

    [Route("{id}")]
    [HttpGet]
    public ActionResult<PlaceList> GetList(int id)
    {
      PlaceList placeList = _context.PlaceList.Include(b => b.Owner).SingleOrDefault(d => d.Id == id);
      if (placeList == null)
        return NotFound();
      return Ok(placeList);
    }

    [HttpPost]
    public ActionResult<PlaceList> AddList([FromBody] PlaceList placeList)
    {
      _context.PlaceList.Add(placeList);
      _context.SaveChanges();
      return Created("", placeList);
    }

    [Route("{id}")]
    [HttpDelete]
    public ActionResult DeleteList(int id)
    {
      PlaceList placeList = _context.PlaceList.Find(id);
      if (placeList == null)
        return NotFound();
      _context.PlaceList.Remove(placeList);
      _context.SaveChanges();
      return NoContent();
    }

    [HttpPut]
    public ActionResult<PlaceList> UpdateList([FromBody] PlaceList placeList)
    {
      _context.PlaceList.Update(placeList);
      _context.SaveChanges();
      return Created("", placeList);
    }
  }
}