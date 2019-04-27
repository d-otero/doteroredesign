

const cs__blah = cases[0];
const cs__cunyfirst = cases[1];
const cs__salvationarmy = cases[2];
const cs__gladwell = cases[3];

const blah = (cs) => {

    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let user = content__article(cs.ur);
    let cr = content__article(cs.cr);
    let goal = content__article(cs.goal);
    let feature1 = content__article(cs.feature1);
    let feature2 = content__article(cs.feature2);
    let future = content__article(cs.future);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);


    //IMAGES
    let img__sketch = images(cs.img.sketch);
    let img__cover = images(cs.img.cover);
    let img__prototype = prototype(cs.proto);
    let img__feature1 = images(cs.img.feature1);
    let img__feature2 = images(cs.img.feature2);
    let img__goal = images(cs.img.goal);



    let comp = '';

    comp +=
        `
        ${mas}
        ${img__cover}
        ${intro}
        ${img__sketch}
        ${user}
        ${cr}
        ${img__goal}
        ${goal}
        ${img__feature1}
        ${feature1}
        ${img__feature2}
        ${feature2}
        ${future}
        ${lesson}
        ${proto}
        ${img__prototype}
        `
       
    blahContainer.innerHTML = comp;
}

blah(cs__blah);
    



//CUNYFIRST

const cunyfirst = (cs) => {

    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let user = content__article(cs.ur);
    let problem = content__article(cs.problem);
    let goal = content__article(cs.goal);
    let userflow = content__article(cs.userflow);
    let wireframe = content__article(cs.wireframe);
    let navigation = content__article(cs.navigation);
    let navigationFeedback = content__article(cs.navigation.feedback);
    let dynamicContent = content__article(cs.dynamicContent);
    // let future = content__article(cs.future);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);


    // IMAGES
    let img__introduction = images(cs.img.introduction);
    let img__sketch = images(cs.img.sketch);
    let img__userflow = images(cs.img.userflow);
    let img__wireframe = images(cs.img.wireframe);
    let img__navigation = images(cs.img.navigation);
    let img__dynamic = images(cs.img.dynamic);
    let img__prototype = button(cs.proto.p);
  


    let comp = '';

    comp +=
        `
        ${mas}
        ${img__introduction}
        ${intro}
        ${user}
        ${problem}
        ${img__sketch}
        ${goal}
        ${userflow}
        ${img__userflow}
        ${wireframe}
        ${img__wireframe}
        ${navigation}
        ${img__navigation}
        ${navigationFeedback}
        ${dynamicContent}
        ${img__dynamic}
        ${lesson}
        ${proto}
        ${img__prototype}
        `
       
    cunyfirstContainer.innerHTML = comp;
}

cunyfirst(cs__cunyfirst);


//SALVATION ARMY
const salvationarmy = (cs) => {
    let mas = master(cs);
    let img = images(cs.img);

    let comp = '';

    comp +=
        `
        ${mas}
        ${img}
        `
    
    salvationarmyContainer.innerHTML = comp;

}

salvationarmy(cs__salvationarmy);



//GLADWELL
const gladwell = (cs) => {
    let mas = master(cs);
    let img__full = images(cs.img.full);
    let img__lg = images(cs.img.lg);

    let comp = '';

    comp +=
        `
        ${mas}
        ${img__lg}
        ${img__full}
        `
    
    gladwellContainer.innerHTML = comp;

}

gladwell(cs__gladwell);