// @ts-nocheck
function changeStyle()
{
    var text=document.getElementById("id_1").style.color="Blue";
     this.text=document.getElementById("id_1").style.backgroundColor ="Green";
     this.text=document.getElementById("id_1").style.fontSize ="40px";

}

function changeStyle_ParagraphTag()
{
    var paragraph=document.getElementsByTagName("h1");

    for(var i=1;i<=paragraph.length;i++)
    {
        paragraph[i].style.color ="Red";

    }

}


function changeStyle_ClassTag()
{
    var class_paragraph=document.getElementsByClassName("class_6");

    class_paragraph[2].innerHTML = class_paragraph[2].innerHTML + " Added some next content =  aspiring developer";

    for(var i=0;i<=class_paragraph.length;i++)
    {
        class_paragraph[i].style.color ="Green";
        class_paragraph[i].style.backgroundColor = "yellow";

    }
}

function changeContent_ClassTag()
{
    var class_paragraph_1=document.getElementsByClassName("class_9");

    console.log(class_paragraph_1);

    for(var i=0;i<=class_paragraph_1.length;i++)
    {
        class_paragraph_1[i].innerHTML= "Replacing New text ";
    }
}

function AddContent_ClassTag()
{
    var readContent = document.getElementsByClassName("class_11");
    var AddContent1= readContent[0].innerHTML;
    var AddContent2= readContent[1].innerHTML;

    readContent[2].innerHTML=AddContent1 + AddContent2 ;

  
}

function RemoveContent_AddContent_ClassTag()
{
    var readContent = document.getElementsByClassName("class_13");
    var AddContent1= readContent[0].innerHTML=" ";
    var AddContent2= readContent[1].innerHTML=" ";

    readContent[2].innerHTML=AddContent1 + AddContent2 ;

}

function changeBackground()
{
  document.getElementById("JavaScript_ID_4").style.backgroundColor ="Yellow";

  var y=document.getElementById("JavaScript_ID_4").style.color ="green";

//  document.getElementById("JavaScript_ID_4").style.fontSize = "40px"; this code also works, but we need to retrieve every time

  var z = document.getElementById("JavaScript_ID_4");

  z.style.fontSize = "50px";

}

function ReturnBackground()
{
    var y=document.getElementById("JavaScript_ID_4");

    y.style.backgroundColor ="";

    y.style.color = "";
    
    y.style.fontSize = "";


}

function OldPicture()
{
    document.getElementById("image_Id").src="https://i.pinimg.com/originals/d4/32/8c/d4328c59146a839d79a2fadf5662d2de.jpg"
    document.getElementById("image_Id").style.height="400px";
    document.getElementById("image_Id").style.width="400px";


}

function NewPicture()
{
    document.getElementById("image_Id").src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-yellow-smiley-face-png-image_960884.jpg"
    document.getElementById("image_Id").style.height="400px";
    document.getElementById("image_Id").style.width="400px";


}

function Adding_Paragraph_Content()
{

    //Collecting Main ID

    var add_element_1 = document.getElementById("main");


//Creating Header Section Information


    var add_element_header = document.createElement("h1")

    var add_element_2_headerContent = document.createTextNode("Created new header using JavaScript program");

    add_element_header.appendChild(add_element_2_headerContent);

    add_element_1.appendChild(add_element_header);



//Creating Paragraph Content Section Information

    var add_element_paragraph = document.createElement("p");



    var add_element_2_paragraph = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
        " Aliquam aliquid consectetur magni maiores natus non omnis similique suscipit temporibus velit! A " +
        "adipisci amet animi asperiores consequuntur corporis cumque deserunt dignissimos dolorem dolorum " +
        "eaque earum eius error est facere, fuga in libero maxime non nostrum numquam odio officia perferendis " +
        "porro quae quas quasi ratione rem saepe sint sunt tempore, velit voluptatem? ");


    add_element_paragraph.appendChild(add_element_2_paragraph);


    add_element_1.appendChild(add_element_paragraph)

}

function Removing_Paragraph_Content()
{
     var element_tag_header = document.getElementsByTagName("h1")[2];
     var parent_header=element_tag_header.parentNode;
     parent_header.removeChild(element_tag_header);

  var element_tag_paragraph=document.getElementsByTagName("p")[6];
  var parent_paragraph= element_tag_paragraph.parentNode;
    parent_paragraph.removeChild(element_tag_paragraph);

}

function changeStyle_ChildNodes()
{

var parent = document.getElementById("main");

    var child = parent.childNodes[5];
    child.style.color = "red";

}

function changeStyle_ChildNodes_withoutSpace()
{


    var parent1 = document.getElementById("main");

    var child1= parent1.lastElementChild;
    child1.style.color = "Yellow";
}

function changeStyle_ParentNodes_withoutSpace()
{
    // this code also works
  /*   var child2 = document.getElementById("child_paragraphTag");
    var parent2 = child2.parentNode;
    parent2.style.backgroundColor = "Yellow"; */

    var finalParentNode = document.getElementById("main");
    finalParentNode.style.backgroundColor = "green";
}

function changeStyle_Next_SiblingNodes_withoutSpace()
{

    var paragraph2 = document.getElementById("child_paragraphTag");
    var Sibling = paragraph2.nextElementSibling;
    Sibling.style.fontSize = "35px";
    Sibling.style.backgroundColor = "pink";
}

function changeStyle_Previous_SiblingNodes_withoutSpace()
{
    var paragraph3 = document.getElementById("child_paragraphTag");
    var Sibling1 = paragraph3.previousElementSibling;
    Sibling1.style.fontSize = "35px";
    Sibling1.style.backgroundColor = "orange";

    
}




function convertUpperCase()
{
    var hello = "yes world";

    document.write(hello.toUpperCase());

}


