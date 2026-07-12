import Image from "@/components/ui/Image";

type SuggestedPerson = {
  name: string;
  title: string;
  image: string;
};

const SUGGESTED_PEOPLE: SuggestedPerson[] = [
  { name: "Steve Jobs", title: "CEO of Apple", image: "/assets/images/people1.png" },
  { name: "Ryan Roslansky", title: "CEO of Linkedin", image: "/assets/images/people2.png" },
  { name: "Dylan Field", title: "CEO of Figma", image: "/assets/images/people3.png" },
];

export function SuggestedPeople() {
  return (
    <div className="_layout_left_sidebar_inner">
      <div className="_left_inner_area_suggest _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <div className="_left_inner_area_suggest_content _mar_b24">
          <h4 className="_left_inner_area_suggest_content_title _title5">
            Suggested People
          </h4>
          <span className="_left_inner_area_suggest_content_txt">
            <a
              className="_left_inner_area_suggest_content_txt_link"
              href="#0"
            >
              See All
            </a>
          </span>
        </div>
        {SUGGESTED_PEOPLE.map(({ name, title, image }, index) => (
          <div className="_left_inner_area_suggest_info" key={name}>
            <div className="_left_inner_area_suggest_info_box">
              <div className="_left_inner_area_suggest_info_image">
                <a href="profile.html">
                  <Image
                    src={image}
                    alt="Image"
                    className={index === 0 ? "_info_img" : "_info_img1"}
                  />
                </a>
              </div>
              <div className="_left_inner_area_suggest_info_txt">
                <a href="profile.html">
                  <h4 className="_left_inner_area_suggest_info_title">
                    {name}
                  </h4>
                </a>
                <p className="_left_inner_area_suggest_info_para">{title}</p>
              </div>
            </div>
            <div className="_left_inner_area_suggest_info_link">
              {" "}
              <a href="#0" className="_info_link">
                Connect
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
