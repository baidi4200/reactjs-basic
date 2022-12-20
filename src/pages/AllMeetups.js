import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://www.w3schools.com/html/img_girl.jpg",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://www.w3schools.com/w3images/boy.jpg",
    address: "Some address 10, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </section>
  );
}

export default AllMeetups;
