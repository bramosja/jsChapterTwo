let elizabethSanger = {
    // Her congressional district
    district: "Fourth",
    // Her platform statements for the following issues: Taxes, Jobs, Infrastructure, Health care, Crime and enforcement
        // array contrains variables with statements
    platform: ["taxes", "jobs", "infrastructure", "Health Care", "Crime and Enforcement"], 
    // URL for donation form
    donationForm: "donationform.com",
    // Calendar of events
    calendar: ["event1", "event2", "event3"],
    // Volunteer information: Name, Address, Email, Phone number, Availability, What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
    volunteers: [
        {
            name: "Brittany",
            address: "630 Bell Road",
            email: "bramosjaneway@yahoo.com",
            phoneNumber: "931-308-2344",
            availability: "Evenings",
        }
    ],
    // Biography
    biography: "Elizabeth Sanger is blah blah blah blah",
    // Image gallery: Head shot, Picture of family, Picture of constituents
    imageGallery: ["headshot.jpg", "family.jpg", "constituents.jpg"],
    // Mission statement
    missionStatement: "The objectives of my campaign are blah blah blah",
    // URL for registering to vote
    voteRegistrationLink: "https://sos.tn.gov/products/elections/register-vote"

}

function changeDistrict (newDistrict) {
    elizabethSanger.district = newDistrict;
}

function addPlatform (platformItem) {
    elizabethSanger.platform.push (platformItem);
}

function changeDonationForm (newDonation) {
    elizabethSanger.donationForm = newDonation;
}

function addEvents (newEvent) {
    elizabethSanger.calendar.push (newEvent);
}

function addVolunteers (newName, newAddress, newEmail, newPhoneNum, newAvailability) {
    elizabethSanger.volunteers.push (newName, newAddress, newEmail, newPhoneNum, newAvailability);
}

function newBiography (updatedBiography) {
    elizabethSanger.biography = updatedBiography;
}

function editImageGallery (newImage) {
    elizabethSanger.imageGallery.push (newImage));
}

function updateMission (newMission) {
    elizabethSanger.missionStatement = newMission;
}

function changeVRLink (newVote) {
    elizabethSanger.voteRegistrationLink = newVote;
}