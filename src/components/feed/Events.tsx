import Image from "@/components/ui/Image";

type FeedEvent = {
  id: string;
  day: string;
  month: string;
  title: string;
  image: string;
  goingCount: string;
  href: string;
};

const EVENTS: FeedEvent[] = [
  {
    id: "event-1",
    day: "10",
    month: "Jul",
    title: "No more terrorism no more cry",
    image: "/assets/images/feed_event1.png",
    goingCount: "17 People Going",
    href: "event-single.html",
  },
  {
    id: "event-2",
    day: "10",
    month: "Jul",
    title: "No more terrorism no more cry",
    image: "/assets/images/feed_event1.png",
    goingCount: "17 People Going",
    href: "event-single.html",
  },
];

export function Events() {
  return (
    <div className="_layout_left_sidebar_inner">
      <div className="_left_inner_area_event _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <div className="_left_inner_event_content">
          <h4 className="_left_inner_event_title _title5">Events</h4>
          <a href="event.html" className="_left_inner_event_link">
            See all
          </a>
        </div>
        {EVENTS.map(({ id, day, month, title, image, goingCount, href }) => (
          <a className="_left_inner_event_card_link" href={href} key={id}>
            <div className="_left_inner_event_card">
              <div className="_left_inner_event_card_iamge">
                <Image src={image} alt="Image" className="_card_img" />
              </div>
              <div className="_left_inner_event_card_content">
                <div className="_left_inner_card_date">
                  <p className="_left_inner_card_date_para">{day}</p>
                  <p className="_left_inner_card_date_para1">{month}</p>
                </div>
                <div className="_left_inner_card_txt">
                  <h4 className="_left_inner_event_card_title">{title}</h4>
                </div>
              </div>
              <hr className="_underline" />
              <div className="_left_inner_event_bottom">
                <p className="_left_iner_event_bottom">{goingCount}</p>{" "}
                <span className="_left_iner_event_bottom_link">Going</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
