async function peopleFetchAsync() {
    //בקשה לנתונים
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let peopleList = await response.json();
        let ul = '<ul>';
        //משתנה שמחזיק לי את הנתונים השמורים
        var enableDisable = localStorage;
        //ריצה על נתוני הבקשה
        peopleList.forEach(people => {
            //בדיקה מול הזיכרון לאיזה שם צריך ליהיות עיצוב
            if (enableDisable[people.name] == 'checked') {
                ul += `<li class="checked">${people.name}</li>`;
            }
            else {
                ul += `<li>${people.name} </li>`;
            }
        });
        ul += `</ul>`;
        //document.querySelector('ul').innerHTML=ul; option 1
        document.getElementById('DivList').innerHTML = ul; //option 2
    }
    catch{
        console.log(`eror`);
    }
}

//מוסיף class/מוריד class
DivList.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'LI' && ev.target.classList != 'checked') {
        ev.target.classList.toggle('checked');
        //מעדכן את הזיכרון בהתאם
        localStorage.setItem(ev.target.innerText, "checked")
    }
    else {
        ev.target.classList.remove('checked');
        //מעדכן את הזיכרון בהתאם
        localStorage.setItem(ev.target.innerText, null)
    }
});

//ניקוי הזיכרון
// localStorage.clear() 

peopleFetchAsync();