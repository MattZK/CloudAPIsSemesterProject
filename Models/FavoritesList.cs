using System.Collections.Generic;

namespace CloudAPIsSemesterProject.Models
{
  public class FavoritesList
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ICollection<Place> Places { get; set; }
  }
}