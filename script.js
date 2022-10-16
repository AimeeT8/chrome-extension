async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "75ccd321d9mshdc37c81212454f0p1aa943jsn3d2d75dd4246",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com"
    }
  };

  const res = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-10-15&maxDate=2022-10-31&page=1",
    options
  );
  const record = await res.json();

  document.getElementById("concerts").innerHTML = record.data
    .map(item => `<li>${item.name}</li>`)
    .join("");
}
fetchData();
