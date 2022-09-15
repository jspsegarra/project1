document.getElementById("form-container").addEventListener("submit", Post);
function Post(event) {
    var new_title = document.getElementById("name").value;
    var new_body = document.getElementById("comment").value;
    var userid = document.getElementById("phone").value;

    console.log(`Input Data:  ${userid}   ${new_title}   ${new_body}`);

    fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items', {
        method: 'POST',
        body: JSON.stringify({
            title: new_title,
            body: new_body,
            userId: userid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
            "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(`RESPONSE: ${JSON.stringify(data)}`);

        })
        
        .then(() => {
            const log = document.getElementById('formDome');
            log.textContent = ` Thank you! Your submission has been received!`
            //  Time stamp: ${event.timeStamp};
            event.preventDefault();
        })
        .catch((err) => { console.error(err); });



    let formulario = document.getElementById("form-container");
    formulario.submit()
    formulario.reset()
    return false; // Prevent page refresh
}