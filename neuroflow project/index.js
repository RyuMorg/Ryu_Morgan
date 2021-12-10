fetch('./json_data/albums.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
