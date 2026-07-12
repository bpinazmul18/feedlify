import Image from "@/components/ui/Image";
import {
  AccountSettingsIcon,
  AddStoryIcon,
  AddStoryMobileIcon,
  ArticleIcon,
  ChatFilledIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EditPencilIcon,
  EventIcon,
  FriendRequestFilledIcon,
  FriendRequestIcon,
  HamburgerIcon,
  HelpSupportIcon,
  HomeFilledIcon,
  HomeIcon,
  LogoutIcon,
  MoonIcon,
  MoreVerticalIcon,
  NotificationBellIcon,
  NotificationFilledIcon,
  PhotoIcon,
  SearchIcon,
  SendIcon,
  StoryArrowIcon,
  SunIcon,
  VideoIcon,
} from "@/components/feedlify-icons";
import { Explore } from "@/components/feed/Explore";
import { SuggestedPeople } from "@/components/feed/SuggestedPeople";
import { Events } from "@/components/feed/Events";
import { YouMightLike } from "@/components/feed/YouMightLike";
import { YourFriends } from "@/components/feed/YourFriends";
import { Post, type PostData } from "@/components/feed/Post";

const FEED_POSTS: PostData[] = [
  {
    id: "post-1",
    authorName: "Karim Saif",
    authorImage: "/assets/images/post_img.png",
    postedAt: "5 minute ago",
    title: "-Healthy Tracking App",
    image: "/assets/images/timeline_img.png",
    reactionImages: [
      "/assets/images/react_img1.png",
      "/assets/images/react_img2.png",
      "/assets/images/react_img3.png",
      "/assets/images/react_img4.png",
      "/assets/images/react_img5.png",
    ],
    totalReactions: "9+",
    commentCount: 12,
    shareCount: 122,
    comment: {
      authorName: "Radovan SkillArena",
      authorImage: "/assets/images/txt_img.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      totalReactions: 198,
      timeAgo: "21m",
      previousCommentsCount: 4,
    },
  },
  {
    id: "post-2",
    authorName: "Karim Saif",
    authorImage: "/assets/images/post_img.png",
    postedAt: "5 minute ago",
    title: "-Healthy Tracking App",
    image: "/assets/images/timeline_img.png",
    reactionImages: [
      "/assets/images/react_img1.png",
      "/assets/images/react_img2.png",
      "/assets/images/react_img3.png",
      "/assets/images/react_img4.png",
      "/assets/images/react_img5.png",
    ],
    totalReactions: "9+",
    commentCount: 12,
    shareCount: 122,
    comment: {
      authorName: "Radovan SkillArena",
      authorImage: "/assets/images/txt_img.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      totalReactions: 198,
      timeAgo: "21m",
      previousCommentsCount: 4,
    },
  },
];

export default function FeedPage() {
  return (
    <div className="_layout _layout_main_wrapper">
      {/* Switching Btn Start */}
      <div className="_layout_mode_swithing_btn">
        <button type="button" className="_layout_swithing_btn_link">
          <div className="_layout_swithing_btn">
            <div className="_layout_swithing_btn_round"></div>
          </div>
          <div className="_layout_change_btn_ic1">
            <MoonIcon />
          </div>
          <div className="_layout_change_btn_ic2">
            <SunIcon />
          </div>
        </button>
      </div>
      {/* Switching Btn End */}
      <div className="_main_layout">
        {/* Desktop Menu Start */}
        <nav className="navbar navbar-expand-lg navbar-light _header_nav _padd_t10">
          <div className="container _custom_container">
            <div className="_logo_wrap">
              <a className="navbar-brand" href="feed.html">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Image"
                  className="_nav_logo"
                />
              </a>
            </div>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="_header_form ms-auto">
                <form className="_header_form_grp">
                  <SearchIcon className="_header_form_svg" />
                  <input
                    className="form-control me-2 _inpt1"
                    type="search"
                    placeholder="input search text"
                    aria-label="Search"
                  />
                </form>
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0 _header_nav_list ms-auto _mar_r8">
                <li className="nav-item _header_nav_item">
                  <a
                    className="nav-link _header_nav_link_active _header_nav_link"
                    aria-current="page"
                    href="feed.html"
                  >
                    <HomeIcon />
                  </a>
                </li>
                <li className="nav-item _header_nav_item">
                  <a
                    className="nav-link _header_nav_link"
                    aria-current="page"
                    href="friend-request.html"
                  >
                    <FriendRequestIcon />
                  </a>
                </li>
                <li className="nav-item _header_nav_item">
                  <span
                    id="_notify_btn"
                    className="nav-link _header_nav_link _header_notify_btn"
                  >
                    <NotificationBellIcon />
                    <span className="_counting">6</span>
                    <div id="_notify_drop" className="_notification_dropdown">
                      <div className="_notifications_content">
                        <h4 className="_notifications_content_title">
                          Notifications
                        </h4>
                        <div className="_notification_box_right">
                          <button
                            type="button"
                            className="_notification_box_right_link"
                          >
                            <MoreVerticalIcon />
                          </button>
                          <div className="_notifications_drop_right">
                            <ul className="_notification_list">
                              <li className="_notification_item">
                                <span className="_notification_link">
                                  Mark as all read
                                </span>
                              </li>
                              <li className="_notification_item">
                                <span className="_notification_link">
                                  Notifivations seetings
                                </span>
                              </li>
                              <li className="_notification_item">
                                <span className="_notification_link">
                                  Open Notifications
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="_notifications_drop_box">
                        <div className="_notifications_drop_btn_grp">
                          <button className="_notifications_btn_link">
                            All
                          </button>
                          <button className="_notifications_btn_link1">
                            Unread
                          </button>
                        </div>
                        <div className="_notifications_all">
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/friend-req.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                <span className="_notify_txt_link">
                                  Steve Jobs
                                </span>
                                posted a link in your timeline.
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="_notification_box">
                            <div className="_notification_image">
                              <Image
                                src="/assets/images/profile-1.png"
                                alt="Image"
                                className="_notify_img"
                              />
                            </div>
                            <div className="_notification_txt">
                              <p className="_notification_para">
                                An admin changed the name of the group
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                                to
                                <span className="_notify_txt_link">
                                  Freelacer usa
                                </span>
                              </p>
                              <div className="_nitification_time">
                                <span>42 miniutes ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </li>
                <li className="nav-item _header_nav_item">
                  <a
                    className="nav-link _header_nav_link"
                    aria-current="page"
                    href="chat.html"
                  >
                    <ChatIcon />{" "}
                    <span className="_counting">2</span>
                  </a>
                </li>
              </ul>
              <div className="_header_nav_profile">
                <div className="_header_nav_profile_image">
                  <Image
                    src="/assets/images/profile.png"
                    alt="Image"
                    className="_nav_profile_img"
                  />
                </div>
                <div className="_header_nav_dropdown">
                  <p className="_header_nav_para">Dylan Field</p>
                  <button
                    id="_profile_drop_show_btn"
                    className="_header_nav_dropdown_btn _dropdown_toggle"
                    type="button"
                  >
                    <ChevronDownIcon />
                  </button>
                </div>
                {/* dropdown */}
                <div
                  id="_prfoile_drop"
                  className="_nav_profile_dropdown _profile_dropdown"
                >
                  <div className="_nav_profile_dropdown_info">
                    <div className="_nav_profile_dropdown_image">
                      <Image
                        src="/assets/images/profile.png"
                        alt="Image"
                        className="_nav_drop_img"
                      />
                    </div>
                    <div className="_nav_profile_dropdown_info_txt">
                      <h4 className="_nav_dropdown_title">Dylan Field</h4>
                      <a href="profile.html" className="_nav_drop_profile">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <hr />
                  <ul className="_nav_dropdown_list">
                    <li className="_nav_dropdown_list_item">
                      <a href="#0" className="_nav_dropdown_link">
                        <div className="_nav_drop_info">
                          <span>
                            <AccountSettingsIcon />
                          </span>
                          Settings
                        </div>
                        <button type="submit" className="_nav_drop_btn_link">
                          <ChevronRightIcon />
                        </button>
                      </a>
                    </li>
                    <li className="_nav_dropdown_list_item">
                      <a href="#0" className="_nav_dropdown_link">
                        <div className="_nav_drop_info">
                          <span>
                            <HelpSupportIcon />
                          </span>
                          Help & Support
                        </div>
                        <button type="submit" className="_nav_drop_btn_link">
                          <ChevronRightIcon />
                        </button>
                      </a>
                    </li>
                    <li className="_nav_dropdown_list_item">
                      <a href="#0" className="_nav_dropdown_link">
                        <div className="_nav_drop_info">
                          <span>
                            <LogoutIcon />
                          </span>
                          Log Out
                        </div>
                        <button type="submit" className="_nav_drop_btn_link">
                          <ChevronRightIcon />
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Desktop Menu End */}
        {/* Mobile Menu Start */}
        <div className="_header_mobile_menu">
          <div className="_header_mobile_menu_wrap">
            <div className="container">
              <div className="_header_mobile_menu">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_header_mobile_menu_top_inner">
                      <div className="_header_mobile_menu_logo">
                        <a href="feed.html" className="_mobile_logo_link">
                          <Image
                            src="/assets/images/logo.svg"
                            alt="Image"
                            className="_nav_logo"
                          />
                        </a>
                      </div>
                      <div className="_header_mobile_menu_right">
                        <form className="_header_form_grp">
                          <a href="#0" className="_header_mobile_search">
                            <SearchIcon />
                          </a>
                        </form>
                        {/* <div className="_header_mobile_toggle">
												<form action="/mobileMenu.html">
													<button type="submit" className="_header_mobile_btn_link" value="go to mobile menu">
														<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" viewBox="0 0 18 14">
															<path stroke="#666" strokeLinecap="round" strokeWidth="1.5" d="M1 1h16M1 7h16M1 13h16"/>
														</svg>													  
													</button>
												</form>
											</div>  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu End */}
        {/* Mobile Bottom Navigation */}
        <div className="_mobile_navigation_bottom_wrapper">
          <div className="_mobile_navigation_bottom_wrap">
            <div className="conatiner">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <ul className="_mobile_navigation_bottom_list">
                    <li className="_mobile_navigation_bottom_item">
                      <a
                        href="feed.html"
                        className="_mobile_navigation_bottom_link _mobile_navigation_bottom_link_active"
                      >
                        <HomeFilledIcon />
                      </a>
                    </li>
                    <li className="_mobile_navigation_bottom_item">
                      <a
                        href="friend-request.html"
                        className="_mobile_navigation_bottom_link"
                      >
                        <FriendRequestFilledIcon />
                      </a>
                    </li>
                    <li className="_mobile_navigation_bottom_item">
                      <a href="no" className="_mobile_navigation_bottom_link">
                        <NotificationFilledIcon />
                        <span className="_counting">6</span>
                      </a>
                    </li>
                    <li className="_mobile_navigation_bottom_item">
                      <a
                        href="chat_list(for_mbl).html"
                        className="_mobile_navigation_bottom_link"
                      >
                        <ChatFilledIcon />
                        <span className="_counting">2</span>
                      </a>
                    </li>
                    <div className="_header_mobile_toggle">
                      <form action="/mobileMenu.html">
                        <button
                          type="submit"
                          className="_header_mobile_btn_link"
                          value="go to mobile menu"
                        >
                          <HamburgerIcon />
                        </button>
                      </form>
                    </div>
                    {/* <li className="_mobile_navigation_bottom_item">
										<a href="profile.html" className="_mobile_navigation_bottom_link">
											<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" fill="none" viewBox="0 0 29 28">
												<g opacity=".6">
												  <path className="_mobile_svg1 _dark_svg" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23.999 24.5v-2.333a4.667 4.667 0 00-4.667-4.667H9.999a4.667 4.667 0 00-4.667 4.667V24.5M14.667 12.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z"/>
												</g>
											</svg>											  
										</a>
									</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Bottom Navigation End */}
        {/* Main Layout Structure */}
        <div className="container _custom_container">
          <div className="_layout_inner_wrap">
            <div className="row">
              {/* Left Sidebar */}
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="_layout_left_sidebar_wrap">
                  <Explore />
                  <SuggestedPeople />
                  <Events />
                </div>
              </div>
              {/* Left Sidebar */}
              {/* Layout Middle */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="_layout_middle_wrap">
                  <div className="_layout_middle_inner">
                    {/* For Desktop */}
                    <div className="_feed_inner_ppl_card _mar_b16">
                      <div className="_feed_inner_story_arrow">
                        <button
                          type="button"
                          className="_feed_inner_story_arrow_btn"
                        >
                          <StoryArrowIcon />
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
                          <div className="_feed_inner_profile_story _b_radious6 ">
                            <div className="_feed_inner_profile_story_image">
                              <Image
                                src="/assets/images/card_ppl1.png"
                                alt="Image"
                                className="_profile_story_img"
                              />
                              <div className="_feed_inner_story_txt">
                                <div className="_feed_inner_story_btn">
                                  <button className="_feed_inner_story_btn_link">
                                    <AddStoryIcon />
                                  </button>
                                </div>
                                <p className="_feed_inner_story_para">
                                  Your Story
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
                          <div className="_feed_inner_public_story _b_radious6">
                            <div className="_feed_inner_public_story_image">
                              <Image
                                src="/assets/images/card_ppl2.png"
                                alt="Image"
                                className="_public_story_img"
                              />
                              <div className="_feed_inner_pulic_story_txt">
                                <p className="_feed_inner_pulic_story_para">
                                  Ryan Roslansky
                                </p>
                              </div>
                              <div className="_feed_inner_public_mini">
                                <Image
                                  src="/assets/images/mini_pic.png"
                                  alt="Image"
                                  className="_public_mini_img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 _custom_mobile_none">
                          <div className="_feed_inner_public_story _b_radious6">
                            <div className="_feed_inner_public_story_image">
                              <Image
                                src="/assets/images/card_ppl3.png"
                                alt="Image"
                                className="_public_story_img"
                              />
                              <div className="_feed_inner_pulic_story_txt">
                                <p className="_feed_inner_pulic_story_para">
                                  Ryan Roslansky
                                </p>
                              </div>
                              <div className="_feed_inner_public_mini">
                                <Image
                                  src="/assets/images/mini_pic.png"
                                  alt="Image"
                                  className="_public_mini_img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 _custom_none">
                          <div className="_feed_inner_public_story _b_radious6">
                            <div className="_feed_inner_public_story_image">
                              <Image
                                src="/assets/images/card_ppl4.png"
                                alt="Image"
                                className="_public_story_img"
                              />
                              <div className="_feed_inner_pulic_story_txt">
                                <p className="_feed_inner_pulic_story_para">
                                  Ryan Roslansky
                                </p>
                              </div>
                              <div className="_feed_inner_public_mini">
                                <Image
                                  src="/assets/images/mini_pic.png"
                                  alt="Image"
                                  className="_public_mini_img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* For Desktop End */}
                    {/* For Mobile */}
                    <div className="_feed_inner_ppl_card_mobile _mar_b16">
                      <div className="_feed_inner_ppl_card_area">
                        <ul className="_feed_inner_ppl_card_area_list">
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story">
                                <Image
                                  src="/assets/images/mobile_story_img.png"
                                  alt="Image"
                                  className="_card_story_img"
                                />
                                <div className="_feed_inner_ppl_btn">
                                  <button
                                    className="_feed_inner_ppl_btn_link"
                                    type="button"
                                  >
                                    <AddStoryMobileIcon />
                                  </button>
                                </div>
                              </div>
                              <p className="_feed_inner_ppl_card_area_link_txt">
                                Your Story
                              </p>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story_active">
                                <Image
                                  src="/assets/images/mobile_story_img1.png"
                                  alt="Image"
                                  className="_card_story_img1"
                                />
                              </div>
                              <p className="_feed_inner_ppl_card_area_txt">
                                Ryan...
                              </p>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story_inactive">
                                <Image
                                  src="/assets/images/mobile_story_img2.png"
                                  alt="Image"
                                  className="_card_story_img1"
                                />
                              </div>
                              <p className="_feed_inner_ppl_card_area_txt">
                                Ryan...
                              </p>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <a
                                href="#0"
                                className="_feed_inner_ppl_card_area_link"
                              >
                                <div className="_feed_inner_ppl_card_area_story_active">
                                  <Image
                                    src="/assets/images/mobile_story_img1.png"
                                    alt="Image"
                                    className="_card_story_img1"
                                  />
                                </div>
                                <p className="_feed_inner_ppl_card_area_txt">
                                  Ryan...
                                </p>
                              </a>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story_inactive">
                                <Image
                                  src="/assets/images/mobile_story_img2.png"
                                  alt="Image"
                                  className="_card_story_img1"
                                />
                              </div>
                              <p className="_feed_inner_ppl_card_area_txt">
                                Ryan...
                              </p>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <a
                                href="#0"
                                className="_feed_inner_ppl_card_area_link"
                              >
                                <div className="_feed_inner_ppl_card_area_story_active">
                                  <Image
                                    src="/assets/images/mobile_story_img1.png"
                                    alt="Image"
                                    className="_card_story_img1"
                                  />
                                </div>
                                <p className="_feed_inner_ppl_card_area_txt">
                                  Ryan...
                                </p>
                              </a>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story">
                                <Image
                                  src="/assets/images/mobile_story_img.png"
                                  alt="Image"
                                  className="_card_story_img"
                                />
                              </div>
                              <p className="_feed_inner_ppl_card_area_txt">
                                Ryan...
                              </p>
                            </a>
                          </li>
                          <li className="_feed_inner_ppl_card_area_item">
                            <a
                              href="#0"
                              className="_feed_inner_ppl_card_area_link"
                            >
                              <div className="_feed_inner_ppl_card_area_story_active">
                                <Image
                                  src="/assets/images/mobile_story_img1.png"
                                  alt="Image"
                                  className="_card_story_img1"
                                />
                              </div>
                              <p className="_feed_inner_ppl_card_area_txt">
                                Ryan...
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* For Mobile End */}
                    <div className="_feed_inner_text_area  _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
                      <div className="_feed_inner_text_area_box">
                        <div className="_feed_inner_text_area_box_image">
                          <Image
                            src="/assets/images/txt_img.png"
                            alt="Image"
                            className="_txt_img"
                          />
                        </div>
                        <div className="form-floating _feed_inner_text_area_box_form ">
                          <textarea
                            className="form-control _textarea"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                          ></textarea>
                          <label
                            className="_feed_textarea_label"
                            htmlFor="floatingTextarea"
                          >
                            Write something ...
                            <EditPencilIcon />
                          </label>
                        </div>
                      </div>
                      {/* For Desktop */}
                      <div className="_feed_inner_text_area_bottom">
                        <div className="_feed_inner_text_area_item">
                          <div className="_feed_inner_text_area_bottom_photo _feed_common">
                            <button
                              type="button"
                              className="_feed_inner_text_area_bottom_photo_link"
                            >
                              {" "}
                              <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                {" "}
                                <PhotoIcon />
                              </span>
                              Photo
                            </button>
                          </div>
                          <div className="_feed_inner_text_area_bottom_video _feed_common">
                            <button
                              type="button"
                              className="_feed_inner_text_area_bottom_photo_link"
                            >
                              {" "}
                              <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                {" "}
                                <VideoIcon />
                              </span>
                              Video
                            </button>
                          </div>
                          <div className="_feed_inner_text_area_bottom_event _feed_common">
                            <button
                              type="button"
                              className="_feed_inner_text_area_bottom_photo_link"
                            >
                              {" "}
                              <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                {" "}
                                <EventIcon />
                              </span>
                              Event
                            </button>
                          </div>
                          <div className="_feed_inner_text_area_bottom_article _feed_common">
                            <button
                              type="button"
                              className="_feed_inner_text_area_bottom_photo_link"
                            >
                              {" "}
                              <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                {" "}
                                <ArticleIcon />
                              </span>
                              Article
                            </button>
                          </div>
                        </div>
                        <div className="_feed_inner_text_area_btn">
                          <button
                            type="button"
                            className="_feed_inner_text_area_btn_link"
                          >
                            <SendIcon />{" "}
                            <span>Post</span>
                          </button>
                        </div>
                      </div>
                      {/* For Desktop */}
                      {/* For Mobile */}
                      <div className="_feed_inner_text_area_bottom_mobile">
                        <div className="_feed_inner_text_mobile">
                          <div className="_feed_inner_text_area_item">
                            <div className="_feed_inner_text_area_bottom_photo _feed_common">
                              <button
                                type="button"
                                className="_feed_inner_text_area_bottom_photo_link"
                              >
                                {" "}
                                <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                  {" "}
                                  <PhotoIcon />
                                </span>
                              </button>
                            </div>
                            <div className="_feed_inner_text_area_bottom_video _feed_common">
                              <button
                                type="button"
                                className="_feed_inner_text_area_bottom_photo_link"
                              >
                                <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                  <VideoIcon />
                                </span>
                              </button>
                            </div>
                            <div className="_feed_inner_text_area_bottom_event _feed_common">
                              <button
                                type="button"
                                className="_feed_inner_text_area_bottom_photo_link"
                              >
                                <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                  <EventIcon />
                                </span>
                              </button>
                            </div>
                            <div className="_feed_inner_text_area_bottom_article _feed_common">
                              <button
                                type="button"
                                className="_feed_inner_text_area_bottom_photo_link"
                              >
                                <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
                                  <ArticleIcon />
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="_feed_inner_text_area_btn">
                            <button
                              type="button"
                              className="_feed_inner_text_area_btn_link"
                            >
                              <SendIcon />{" "}
                              <span>Post</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* For Mobile */}
                    </div>
                    {FEED_POSTS.map((post) => (
                      <Post key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Layout Middle */}
              {/* Right Sidebar */}
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="_layout_right_sidebar_wrap">
                  <YouMightLike />
                  <YourFriends />
                </div>
              </div>
            </div>
            {/* Right Sidebar */}
          </div>
        </div>
      </div>
      {/* Main Layout Structure */}
    </div>
  );
}
