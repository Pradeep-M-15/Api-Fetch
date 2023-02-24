fetch('https://reqres.in/api/users')
			.then(response => response.json())
			.then(data => {
				const tbody = document.querySelector('#data-output tbody');
				data.data.forEach(user => {
					const row = document.createElement('tr');
					row.innerHTML = `
						<td>${user.id}</td>
						<td>${user.email}</td>
						<td>${user.first_name}</td>
						<td>${user.last_name}</td>
						<td><img src="${user.avatar}" alt="Avatar"></td>
					`;
					tbody.appendChild(row);
				});
			})
			.catch(error => console.error('Error:', error));