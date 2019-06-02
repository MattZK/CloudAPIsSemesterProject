using Newtonsoft.Json;

namespace CloudAPIsSemesterProject.Models
{
  public class Place
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Location { get; set; }
    public string FSQID { get; set; }
    public int FavoritesListId { get; set; }
    [JsonIgnore]
    public FavoritesList FavoritesList { get; set; }
  }
}