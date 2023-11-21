function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Alabama': '<p>This question can be complicated, so let’s start with one dog. This is <b>Anna Lucille</b>.<div class="content"></p><img src="Alabama.png" alt="Alabama" width="200" height="200"><p>Anna Lucille was one of 1,428 dogs available for adoption in Alabama on PetFinder, September 20, 2019. But Anna Lucille didn’t originate in Alabama. According to her description, she was brought into the state from a rough situation in Florida.</p> <p>On the day that Anna Lucille was available, < 1% of the adoptable dogs in Alabama came into the local rescues and shelters from out of state.</p></div>',
        'California': '<p>This question can be complicated, so let’s start with one dog. This is <b>Chula</b>.</p><div class="content"><img src="California.png" alt="California"><p>Chula was one of 1,664 dogs available for adoption in California on PetFinder, September 20, 2019. But Chula didn’t originate in California. According to her description, she was brought into the state from Mexico.</p><p>On the day that Chula was available, < 1% of the adoptable dogs in California came into the local rescues andshelters from out of state. </p></div>',
      'Colorado': '<p>This question can be complicated, so let’s start with one dog. This is <b>Rachel</b>.</p><div class="content"><img src="Colorado.png" alt="Colorado"><p>Rachel was one of 1,773 dogs available for adoption in Colorado on PetFinder, September 20, 2019. But Rachel didn’t originate in Colorado. According to her description, she was brought into the state from Texas.</p><p>On the day that Rachel was available, 4% of the adoptable dogs in Colorado came into the local rescues and shelters from out of state.</p></div>',
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}