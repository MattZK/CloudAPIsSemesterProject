using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CloudAPIsSemesterProject.Models;

namespace CloudAPIsSemesterProject.Controllers
{
  [Route("api/[controller]")]
  public class UsersController : Controller
  {
    public LibraryContext _context { get; set; }
    public UsersController(LibraryContext ctx)
    {
      _context = ctx;
    }

    [HttpGet]
    public ActionResult<List<User>> GetUsers()
    {
      return Ok(_context.Users.ToList());
    }

    [Route("{id}")]
    [HttpGet]
    public ActionResult<User> GetUser(int id)
    {
      User user = _context.Users.Find(id);
      if (user == null)
        return NotFound();
      return Ok(user);
    }

    [HttpPost]
    public ActionResult<User> AddUser([FromBody] User user)
    {
      _context.Users.Add(user);
      _context.SaveChanges();
      return Created("", user);
    }

    [Route("{id}")]
    [HttpDelete]
    public ActionResult DeleteUser(int id)
    {
      User user = _context.Users.Find(id);
      if (user == null)
        return NotFound();
      _context.Users.Remove(user);
      _context.SaveChanges();
      return NoContent();
    }

    [HttpPut]
    public ActionResult<User> UpdateUser([FromBody] User user)
    {
      _context.Users.Update(user);
      _context.SaveChanges();
      return Created("", user);
    }
  }
}