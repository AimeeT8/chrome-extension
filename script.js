async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "RapidAPIKey would go here",
      "X-RapidAPI-Host": "Host name here"
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
