fetch('https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=wN7i93zHO%2F%2B0djWtfTghS2BLkKGqsWhSWn%2FWlmkAw%2BiUQ5wtJ0EUKUbYpwkq%2BeTLPX9wOmljTbBrGimMlM0CMQ%3D%3D')
    .then(response => response.json())
    .then(json => {
        let foods = document.querySelector('#foods');
        /*
        let ul = document.createElement('ul');
        foods.appendChild(ul);
        for(let i=0; i < json.data.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = json.data[i]["상호"];
            ul.appendChild(li);
        }
        */
        // console.log(json);
        let table = document.createElement('table');
        foods.appendChild(table);
        for (let i = 0; i < json.currentCount; i++) {     
            let tr = document.createElement('tr');

            let td = document.createElement('td');
            td.innerHTML = json.data[i]["상호"];
            tr.appendChild(td);

            let td2 = document.createElement('td');
            td2.innerHTML = json.data[i]["도로명주소"];
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = json.data[i]["전화번호"];
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            td4.innerHTML = json.data[i]["업태"];
            tr.appendChild(td4);

            table.appendChild(tr);
        }
    });