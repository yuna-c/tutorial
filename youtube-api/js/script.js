const api_key = 'AIzaSyCtJt2jnOcXV6eLUZmF2gT6LGa3mSPkpbM';
const playlist_id = 'PLYOPkdUKSFgWqafuDQN9di3uLJoTV3L3W';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const num = 7;
// const result_url = `${base_url}?part=snippet&api_key=${api_key}&playlistId=${playlist_id}&maxResults=5`;
const result_url = `${base_url}?part=snippet&key=${api_key}&playlistId=${playlist_id}&maxResults=${num}`;

fetch(result_url)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tags = '';
		json.items.forEach((el) => {
			tags += `
        <article>
          <img src=${el.snippet.thumbnails.standard.url} />
          <h2>${el.snippet.title}</h2>
          <p>${el.snippet.description}</p>
          <span>${el.snippet.publishedAt}</span>
        </article>
      `;
		});

		document.body.innerHTML = tags;
	});

/*
  브라우저 URL을 통해서 데이터 요청방식 GET방식
  요청URL : 기본URL?name=value&name=value
  QuerySting : 기본 요청 URL뒤에 ?뒤쪽으로 name=value쌍으로 옵션을 담아서 전달하는 방식
*/
