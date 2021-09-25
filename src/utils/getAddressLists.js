import { provinces, cities, barangays } from "select-philippines-address";

export const getProvinces = async regionCode => {
  let provinceList = [];
  await provinces(regionCode).then(province => {
    provinceList = province;
  });
  return provinceList;
};

export const getCities = async provinceCode => {
  let cityList = [];
  await cities(provinceCode).then(city => {
    cityList = city;
  });
  return cityList;
};

export const getBarangays = async cityCode => {
  let barangayList = [];
  await barangays(cityCode).then(barangays => {
    barangayList = barangays;
  });
  return barangayList;
};

//provinces("01").then(province => console.log(province));
//cities("0128").then(city => console.log(city));
//barangays("052011").then(barangays => console.log(barangays));
