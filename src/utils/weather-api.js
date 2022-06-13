const getCurWeatherByLatLng = async (lat, lng) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=745e835f65d91b63b8c12db1df1ba019`
  ).then((res) => res.json());

  console.log("Done");

  // if (!result.ok) throw new Error("Fetch failed - Bad request");
  // return result;
};
function capitalize(str) {
  let arr = str.split(" ");
  arr.forEach((word, i) => {
    //
    arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return arr.join(" ");
}
module.exports = {
  getCurWeatherByLatLng,
  capitalize
};
