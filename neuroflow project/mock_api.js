/*export function mockFetchHelper(
  isSuccess = true,
  returnValue,
  timeoutValue = 1000
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(returnValue);
      } else {
        reject(returnValue);
      }
    }, timeoutValue);
  });
}
*/
//Main function
async function Fetch_values(info, table) {
  const tableBody = table.querySelector('tbody');
  const tableFoot = table.querySelector('tfoot');
  const response = await fetch(info);
  const { albums } = await response.json(); //convert data from json to js

  //remove existing content from tbody
  tableBody.innerHTML = '<tr></tr>';
  tableFoot.innerHTML = '<td</td>';

  //Store info 5 objects of data
  for (const info_list of albums) {
    const info_element_1 = document.createElement('tr'); //create rows for data by accessing each of the 5 objects

    for (const info of info_list.album_title) // loop through the object keys and return the value
      info_element_1.textContent = info_list['album_title'];

    tableBody.querySelector('tr').appendChild(info_element_1);
  }
  //Loop through band names
  for (const info_list2 of albums) {
    const info_element_2 = document.createElement('tr'); //create rows for data by accessing each of the 5 objects

    for (const info1 of info_list2.band_name) // loop through the object keys and return the value
      info_element_2.textContent = info_list2['band_name'];

    tableFoot.querySelector('td').appendChild(info_element_2);
  }
}

//calling function
Fetch_values('./albums.json', document.querySelector('table'));
