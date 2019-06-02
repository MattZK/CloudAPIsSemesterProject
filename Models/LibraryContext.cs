using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudAPIsSemesterProject;

namespace CloudAPIsSemesterProject.Models
{
  public class LibraryContext: DbContext
  {
      public LibraryContext(DbContextOptions<LibraryContext> options): base(options){}
      public DbSet<User> Users { get; set; }
      public DbSet<PlaceList> PlaceList { get; set; }
      public DbSet<Place> Places { get; set; }
  }
}
