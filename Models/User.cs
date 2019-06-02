using System.Collections.Generic;
using Newtonsoft.Json;

namespace CloudAPIsSemesterProject.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string MSID { get; set; }
    [JsonIgnore]
    public ICollection<PlaceList> placeLists { get; set; }
  }
}