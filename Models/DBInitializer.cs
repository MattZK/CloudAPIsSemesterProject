using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudAPIsSemesterProject.Model
{
  public class DBInitializer
  {
    public static void Initialize(LibraryContext context)
    {
      //Create the db if not yet exists
      context.Database.EnsureCreated();
    }
  }
}
