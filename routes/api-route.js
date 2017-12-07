model.create({
    id: id,
    name: name,
    email: email,
    location: location,
    handle: handle,

    });

    db.Users.create({
        name: $("#name").val().trim(),

    }).then(newUser => {
        console.log(`New User ${newUser.name}, with id ${newUser.id} has been created` );
    });

    db.Users.findOne ({
        handle: $("#handle").val().trim()
    }).then(user => {
        console.log(`Found user: ${user}`);
    })

