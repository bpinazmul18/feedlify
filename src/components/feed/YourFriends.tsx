import Image from "@/components/ui/Image";
import { OnlineStatusDotIcon, SearchIcon } from "@/components/feedlify-icons";

type Friend = {
  id: string;
  name: string;
  title: string;
  image: string;
  isOnline: boolean;
  lastActive?: string;
};

const FRIENDS: Friend[] = [
  { id: "friend-1", name: "Steve Jobs", title: "CEO of Apple", image: "/assets/images/people1.png", isOnline: false, lastActive: "5 minute ago" },
  { id: "friend-2", name: "Ryan Roslansky", title: "CEO of Linkedin", image: "/assets/images/people2.png", isOnline: true },
  { id: "friend-3", name: "Dylan Field", title: "CEO of Figma", image: "/assets/images/people3.png", isOnline: true },
  { id: "friend-4", name: "Steve Jobs", title: "CEO of Apple", image: "/assets/images/people1.png", isOnline: false, lastActive: "5 minute ago" },
  { id: "friend-5", name: "Ryan Roslansky", title: "CEO of Linkedin", image: "/assets/images/people2.png", isOnline: true },
  { id: "friend-6", name: "Dylan Field", title: "CEO of Figma", image: "/assets/images/people3.png", isOnline: true },
  { id: "friend-7", name: "Dylan Field", title: "CEO of Figma", image: "/assets/images/people3.png", isOnline: true },
  { id: "friend-8", name: "Steve Jobs", title: "CEO of Apple", image: "/assets/images/people1.png", isOnline: false, lastActive: "5 minute ago" },
];

export function YourFriends() {
  return (
    <div className="_layout_right_sidebar_inner">
      <div className="_feed_right_inner_area_card  _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <div className="_feed_top_fixed">
          <div className="_feed_right_inner_area_card_content _mar_b24">
            <h4 className="_feed_right_inner_area_card_content_title _title5">
              Your Friends
            </h4>
            <span className="_feed_right_inner_area_card_content_txt">
              <a
                className="_feed_right_inner_area_card_content_txt_link"
                href="find-friends.html"
              >
                See All
              </a>
            </span>
          </div>
          <form className="_feed_right_inner_area_card_form">
            <SearchIcon className="_feed_right_inner_area_card_form_svg" />
            <input
              className="form-control me-2 _feed_right_inner_area_card_form_inpt"
              type="search"
              placeholder="input search text"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="_feed_bottom_fixed">
          {FRIENDS.map(({ id, name, title, image, isOnline, lastActive }) => (
            <div
              className={
                isOnline
                  ? "_feed_right_inner_area_card_ppl"
                  : "_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive "
              }
              key={id}
            >
              <div className="_feed_right_inner_area_card_ppl_box">
                <div className="_feed_right_inner_area_card_ppl_image">
                  <a href="profile.html">
                    <Image src={image} alt="" className="_box_ppl_img" />
                  </a>
                </div>
                <div className="_feed_right_inner_area_card_ppl_txt">
                  <a href="profile.html">
                    <h4 className="_feed_right_inner_area_card_ppl_title">
                      {name}
                    </h4>
                  </a>
                  <p className="_feed_right_inner_area_card_ppl_para">
                    {title}
                  </p>
                </div>
              </div>
              <div className="_feed_right_inner_area_card_ppl_side">
                {isOnline ? <OnlineStatusDotIcon /> : <span>{lastActive}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
