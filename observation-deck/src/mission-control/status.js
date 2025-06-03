// Al deze criteria staan binnen het **pop-up form: een nieuwe story maken**
// * [ ] er zijn 3 checkmarks te zien met `Nieuw`, `In Progress`, of `Done`
// * [ ] de box `Nieuw` staat automatisch aangevinkt
// * [ ] bij het aantikken van een andere box, worden de andere boxes afgevinkt

//dit hoort in html in pop-up form:

<!DOCTYPE html>
<html>
    <body>
        <form id="#form">
            <input type="radio" name="nieuw" checked>
            <label for="fname">Nieuw</label>
    
            <input type="radio" name="inProgress" >
            <label for="fname">In Progress</label>
    
            <input type="radio" name="done">
            <label for="fname">Done</label>
        </form>
    </body>
</html>
