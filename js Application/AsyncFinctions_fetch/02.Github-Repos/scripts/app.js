function loadRepos() {
	const username = document.getElementById('username').value

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleRes)
		.then(handleData)
		.catch()


		function handleRes(res) {
			if (res.ok == false) {
				throw new Error(`Error: ${res.status} ${res.statusText}`)
			}
			return res.json()
		}

		function handleData(data) {
			const list = document.getElementById('repos')

			// for (let repo of data) {
			// 	const li = document.createElement('li')
			// 	const a = document.createElement('a')
			// 	a.href = repo.html_url
			// 	a.textContent = repo.full_name

			// 	li.appendChild(a)
			// 	list.appendChild(li)
			// }

			const items = data.map(repo => {
				const li = document.createElement('li')
				const a = document.createElement('a')
				a.href = repo.html_url
				a.textContent = repo.full_name

				li.appendChild(a)

				return li
			})

			list.replaceChildren(...items)
		}

		function handleError(err) {
			console.log(err);
		}
}