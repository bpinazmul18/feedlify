import Image from "@/components/ui/Image";
import {
  AccountSettingsIcon,
  AddStoryIcon,
  AddStoryMobileIcon,
  ArticleIcon,
  BookmarkIcon,
  BookmarksIcon,
  CameraIcon,
  ChatFilledIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CommentReactionIcon,
  DeleteIcon,
  EditPencilIcon,
  EditPostIcon,
  EventIcon,
  FindFriendsIcon,
  FriendRequestFilledIcon,
  FriendRequestIcon,
  GamingIcon,
  GroupIcon,
  HahaReactionIcon,
  HamburgerIcon,
  HeartIcon,
  HelpSupportIcon,
  HideIcon,
  HomeFilledIcon,
  HomeIcon,
  InsightsIcon,
  LearningIcon,
  LogoutIcon,
  MicIcon,
  MoonIcon,
  MoreVerticalIcon,
  NotificationBellBlueIcon,
  NotificationBellIcon,
  NotificationFilledIcon,
  OnlineStatusDotIcon,
  PhotoIcon,
  SavePostIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  StoryArrowIcon,
  SunIcon,
  ThumbsUpIcon,
  VideoIcon,
} from "@/components/feedlify-icons";

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
															<path stroke="#666" stroke-linecap="round" stroke-width="1.5" d="M1 1h16M1 7h16M1 13h16"/>
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
												  <path className="_mobile_svg1 _dark_svg" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.999 24.5v-2.333a4.667 4.667 0 00-4.667-4.667H9.999a4.667 4.667 0 00-4.667 4.667V24.5M14.667 12.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z"/>
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
                  <div className="_layout_left_sidebar_inner">
                    <div className="_left_inner_area_explore _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                      <h4 className="_left_inner_area_explore_title _title5  _mar_b24">
                        Explore
                      </h4>
                      <ul className="_left_inner_area_explore_list">
                        <li className="_left_inner_area_explore_item _explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <LearningIcon />
                            Learning
                          </a>{" "}
                          <span className="_left_inner_area_explore_link_txt">
                            New
                          </span>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <InsightsIcon />
                            Insights
                          </a>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="find-friends.html"
                            className="_left_inner_area_explore_link"
                          >
                            <FindFriendsIcon />
                            Find friends
                          </a>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <BookmarksIcon />
                            Bookmarks
                          </a>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="group.html"
                            className="_left_inner_area_explore_link"
                          >
                            <GroupIcon />
                            Group
                          </a>
                        </li>
                        <li className="_left_inner_area_explore_item _explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <GamingIcon />
                            Gaming
                          </a>{" "}
                          <span className="_left_inner_area_explore_link_txt">
                            New
                          </span>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <SettingsIcon />
                            Settings
                          </a>
                        </li>
                        <li className="_left_inner_area_explore_item">
                          <a
                            href="#0"
                            className="_left_inner_area_explore_link"
                          >
                            <SavePostIcon />
                            Save post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                      <div className="_left_inner_area_suggest_info">
                        <div className="_left_inner_area_suggest_info_box">
                          <div className="_left_inner_area_suggest_info_image">
                            <a href="profile.html">
                              <Image
                                src="/assets/images/people1.png"
                                alt="Image"
                                className="_info_img"
                              />
                            </a>
                          </div>
                          <div className="_left_inner_area_suggest_info_txt">
                            <a href="profile.html">
                              <h4 className="_left_inner_area_suggest_info_title">
                                Steve Jobs
                              </h4>
                            </a>
                            <p className="_left_inner_area_suggest_info_para">
                              CEO of Apple
                            </p>
                          </div>
                        </div>
                        <div className="_left_inner_area_suggest_info_link">
                          {" "}
                          <a href="#0" className="_info_link">
                            Connect
                          </a>
                        </div>
                      </div>
                      <div className="_left_inner_area_suggest_info">
                        <div className="_left_inner_area_suggest_info_box">
                          <div className="_left_inner_area_suggest_info_image">
                            <a href="profile.html">
                              <Image
                                src="/assets/images/people2.png"
                                alt="Image"
                                className="_info_img1"
                              />
                            </a>
                          </div>
                          <div className="_left_inner_area_suggest_info_txt">
                            <a href="profile.html">
                              <h4 className="_left_inner_area_suggest_info_title">
                                Ryan Roslansky
                              </h4>
                            </a>
                            <p className="_left_inner_area_suggest_info_para">
                              CEO of Linkedin
                            </p>
                          </div>
                        </div>
                        <div className="_left_inner_area_suggest_info_link">
                          {" "}
                          <a href="#0" className="_info_link">
                            Connect
                          </a>
                        </div>
                      </div>
                      <div className="_left_inner_area_suggest_info">
                        <div className="_left_inner_area_suggest_info_box">
                          <div className="_left_inner_area_suggest_info_image">
                            <a href="profile.html">
                              <Image
                                src="/assets/images/people3.png"
                                alt="Image"
                                className="_info_img1"
                              />
                            </a>
                          </div>
                          <div className="_left_inner_area_suggest_info_txt">
                            <a href="profile.html">
                              <h4 className="_left_inner_area_suggest_info_title">
                                Dylan Field
                              </h4>
                            </a>
                            <p className="_left_inner_area_suggest_info_para">
                              CEO of Figma
                            </p>
                          </div>
                        </div>
                        <div className="_left_inner_area_suggest_info_link">
                          {" "}
                          <a href="#0" className="_info_link">
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_layout_left_sidebar_inner">
                    <div className="_left_inner_area_event _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                      <div className="_left_inner_event_content">
                        <h4 className="_left_inner_event_title _title5">
                          Events
                        </h4>
                        <a href="event.html" className="_left_inner_event_link">
                          See all
                        </a>
                      </div>
                      <a
                        className="_left_inner_event_card_link"
                        href="event-single.html"
                      >
                        <div className="_left_inner_event_card">
                          <div className="_left_inner_event_card_iamge">
                            <Image
                              src="/assets/images/feed_event1.png"
                              alt="Image"
                              className="_card_img"
                            />
                          </div>
                          <div className="_left_inner_event_card_content">
                            <div className="_left_inner_card_date">
                              <p className="_left_inner_card_date_para">10</p>
                              <p className="_left_inner_card_date_para1">Jul</p>
                            </div>
                            <div className="_left_inner_card_txt">
                              <h4 className="_left_inner_event_card_title">
                                No more terrorism no more cry
                              </h4>
                            </div>
                          </div>
                          <hr className="_underline" />
                          <div className="_left_inner_event_bottom">
                            <p className="_left_iner_event_bottom">
                              17 People Going
                            </p>{" "}
                            <a
                              href="#0"
                              className="_left_iner_event_bottom_link"
                            >
                              Going
                            </a>
                          </div>
                        </div>
                      </a>
                      <a
                        className="_left_inner_event_card_link"
                        href="event-single.html"
                      >
                        <div className="_left_inner_event_card">
                          <div className="_left_inner_event_card_iamge">
                            <Image
                              src="/assets/images/feed_event1.png"
                              alt="Image"
                              className="_card_img"
                            />
                          </div>
                          <div className="_left_inner_event_card_content">
                            <div className="_left_inner_card_date">
                              <p className="_left_inner_card_date_para">10</p>
                              <p className="_left_inner_card_date_para1">Jul</p>
                            </div>
                            <div className="_left_inner_card_txt">
                              <h4 className="_left_inner_event_card_title">
                                No more terrorism no more cry
                              </h4>
                            </div>
                          </div>
                          <hr className="_underline" />
                          <div className="_left_inner_event_bottom">
                            <p className="_left_iner_event_bottom">
                              17 People Going
                            </p>{" "}
                            <a
                              href="#0"
                              className="_left_iner_event_bottom_link"
                            >
                              Going
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
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
                    <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
                      <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
                        <div className="_feed_inner_timeline_post_top">
                          <div className="_feed_inner_timeline_post_box">
                            <div className="_feed_inner_timeline_post_box_image">
                              <Image
                                src="/assets/images/post_img.png"
                                alt=""
                                className="_post_img"
                              />
                            </div>
                            <div className="_feed_inner_timeline_post_box_txt">
                              <h4 className="_feed_inner_timeline_post_box_title">
                                Karim Saif
                              </h4>
                              <p className="_feed_inner_timeline_post_box_para">
                                5 minute ago .<a href="#0">Public</a>
                              </p>
                            </div>
                          </div>
                          <div className="_feed_inner_timeline_post_box_dropdown">
                            <div className="_feed_timeline_post_dropdown">
                              <button
                                id="_timeline_show_drop_btn"
                                className="_feed_timeline_post_dropdown_link"
                              >
                                <MoreVerticalIcon />
                              </button>
                            </div>
                            {/* Dropdown */}
                            <div
                              id="_timeline_drop"
                              className="_feed_timeline_dropdown _timeline_dropdown"
                            >
                              <ul className="_feed_timeline_dropdown_list">
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <BookmarkIcon />
                                    </span>
                                    Save Post
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <NotificationBellBlueIcon />
                                    </span>
                                    Turn On Notification
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <HideIcon />
                                    </span>
                                    Hide
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <EditPostIcon />
                                    </span>
                                    Edit Post
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <DeleteIcon />
                                    </span>
                                    Delete Post
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h4 className="_feed_inner_timeline_post_title">
                          -Healthy Tracking App
                        </h4>
                        <div className="_feed_inner_timeline_image">
                          <Image
                            src="/assets/images/timeline_img.png"
                            alt=""
                            className="_time_img"
                          />
                        </div>
                      </div>
                      <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
                        <div className="_feed_inner_timeline_total_reacts_image">
                          <Image
                            src="/assets/images/react_img1.png"
                            alt="Image"
                            className="_react_img1"
                          />
                          <Image
                            src="/assets/images/react_img2.png"
                            alt="Image"
                            className="_react_img"
                          />
                          <Image
                            src="/assets/images/react_img3.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <Image
                            src="/assets/images/react_img4.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <Image
                            src="/assets/images/react_img5.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <p className="_feed_inner_timeline_total_reacts_para">
                            9+
                          </p>
                        </div>
                        <div className="_feed_inner_timeline_total_reacts_txt">
                          <p className="_feed_inner_timeline_total_reacts_para1">
                            <a href="#0">
                              <span>12</span> Comment
                            </a>
                          </p>
                          <p className="_feed_inner_timeline_total_reacts_para2">
                            <span>122</span> Share
                          </p>
                        </div>
                      </div>
                      <div className="_feed_inner_timeline_reaction">
                        <button className="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <HahaReactionIcon />
                              Haha
                            </span>
                          </span>
                        </button>
                        <button className="_feed_inner_timeline_reaction_comment _feed_reaction">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <CommentReactionIcon />
                              Comment
                            </span>
                          </span>
                        </button>
                        <button className="_feed_inner_timeline_reaction_share _feed_reaction">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <ShareIcon />
                              Share
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="_feed_inner_timeline_cooment_area">
                        <div className="_feed_inner_comment_box">
                          <form className="_feed_inner_comment_box_form">
                            <div className="_feed_inner_comment_box_content">
                              <div className="_feed_inner_comment_box_content_image">
                                <Image
                                  src="/assets/images/comment_img.png"
                                  alt=""
                                  className="_comment_img"
                                />
                              </div>
                              <div className="_feed_inner_comment_box_content_txt">
                                <textarea
                                  className="form-control _comment_textarea"
                                  placeholder="Write a comment"
                                  id="floatingTextarea2"
                                ></textarea>
                              </div>
                            </div>
                            <div className="_feed_inner_comment_box_icon">
                              <button className="_feed_inner_comment_box_icon_btn">
                                <MicIcon />
                              </button>
                              <button className="_feed_inner_comment_box_icon_btn">
                                <CameraIcon />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="_timline_comment_main">
                        <div className="_previous_comment">
                          <button
                            type="button"
                            className="_previous_comment_txt"
                          >
                            View 4 previous comments
                          </button>
                        </div>
                        <div className="_comment_main">
                          <div className="_comment_image">
                            <a
                              href="profile.html"
                              className="_comment_image_link"
                            >
                              <Image
                                src="/assets/images/txt_img.png"
                                alt=""
                                className="_comment_img1"
                              />
                            </a>
                          </div>
                          <div className="_comment_area">
                            <div className="_comment_details">
                              <div className="_comment_details_top">
                                <div className="_comment_name">
                                  <a href="profile.html ">
                                    <h4 className="_comment_name_title">
                                      Radovan SkillArena
                                    </h4>
                                  </a>
                                </div>
                              </div>
                              <div className="_comment_status">
                                <p className="_comment_status_text">
                                  <span>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.{" "}
                                  </span>
                                </p>
                              </div>
                              <div className="_total_reactions">
                                <div className="_total_react">
                                  <span className="_reaction_like">
                                    <ThumbsUpIcon />
                                  </span>
                                  <span className="_reaction_heart">
                                    <HeartIcon />
                                  </span>
                                </div>
                                <span className="_total">198</span>
                              </div>
                              <div className="_comment_reply">
                                <div className="_comment_reply_num">
                                  <ul className="_comment_reply_list">
                                    <li>
                                      <span>Like.</span>
                                    </li>
                                    <li>
                                      <span>Reply.</span>
                                    </li>
                                    <li>
                                      <span>Share</span>
                                    </li>
                                    <li>
                                      <span className="_time_link">.21m</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="_feed_inner_comment_box">
                              <form className="_feed_inner_comment_box_form">
                                <div className="_feed_inner_comment_box_content">
                                  <div className="_feed_inner_comment_box_content_image">
                                    <Image
                                      src="/assets/images/comment_img.png"
                                      alt=""
                                      className="_comment_img"
                                    />
                                  </div>
                                  <div className="_feed_inner_comment_box_content_txt">
                                    <textarea
                                      className="form-control _comment_textarea"
                                      placeholder="Write a comment"
                                      id="floatingTextarea2"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="_feed_inner_comment_box_icon">
                                  <button className="_feed_inner_comment_box_icon_btn">
                                    <MicIcon />
                                  </button>
                                  <button className="_feed_inner_comment_box_icon_btn">
                                    <CameraIcon />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
                      <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
                        <div className="_feed_inner_timeline_post_top">
                          <div className="_feed_inner_timeline_post_box">
                            <div className="_feed_inner_timeline_post_box_image">
                              <Image
                                src="/assets/images/post_img.png"
                                alt=""
                                className="_post_img"
                              />
                            </div>
                            <div className="_feed_inner_timeline_post_box_txt">
                              <h4 className="_feed_inner_timeline_post_box_title">
                                Karim Saif
                              </h4>
                              <p className="_feed_inner_timeline_post_box_para">
                                5 minute ago .<a href="#0">Public</a>
                              </p>
                            </div>
                          </div>
                          <div className="_feed_inner_timeline_post_box_dropdown">
                            <div className="_feed_timeline_post_dropdown">
                              <button className="_feed_timeline_post_dropdown_link">
                                <MoreVerticalIcon />
                              </button>
                            </div>
                            {/* Dropdown */}
                            <div className="_feed_timeline_dropdown">
                              <ul className="_feed_timeline_dropdown_list">
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <BookmarkIcon />
                                    </span>
                                    Save Post
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <NotificationBellBlueIcon />
                                    </span>
                                    Turn On Notification
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <HideIcon />
                                    </span>
                                    Hide
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <EditPostIcon />
                                    </span>
                                    Edit Post
                                  </a>
                                </li>
                                <li className="_feed_timeline_dropdown_item">
                                  <a
                                    href="#0"
                                    className="_feed_timeline_dropdown_link"
                                  >
                                    <span>
                                      <DeleteIcon />
                                    </span>
                                    Delete Post
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h4 className="_feed_inner_timeline_post_title">
                          -Healthy Tracking App
                        </h4>
                        <div className="_feed_inner_timeline_image">
                          <Image
                            src="/assets/images/timeline_img.png"
                            alt=""
                            className="_time_img"
                          />
                        </div>
                      </div>
                      <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
                        <div className="_feed_inner_timeline_total_reacts_image">
                          <Image
                            src="/assets/images/react_img1.png"
                            alt="Image"
                            className="_react_img1"
                          />
                          <Image
                            src="/assets/images/react_img2.png"
                            alt="Image"
                            className="_react_img"
                          />
                          <Image
                            src="/assets/images/react_img3.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <Image
                            src="/assets/images/react_img4.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <Image
                            src="/assets/images/react_img5.png"
                            alt="Image"
                            className="_react_img _rect_img_mbl_none"
                          />
                          <p className="_feed_inner_timeline_total_reacts_para">
                            9+
                          </p>
                        </div>
                        <div className="_feed_inner_timeline_total_reacts_txt">
                          <p className="_feed_inner_timeline_total_reacts_para1">
                            <span>12</span> Comment
                          </p>
                          <p className="_feed_inner_timeline_total_reacts_para2">
                            <span>122</span> Share
                          </p>
                        </div>
                      </div>
                      <div className="_feed_inner_timeline_reaction">
                        <button className="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <HahaReactionIcon />
                              Haha
                            </span>
                          </span>
                        </button>
                        <button className="_feed_inner_timeline_reaction_comment _feed_reaction">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <CommentReactionIcon />
                              Comment
                            </span>
                          </span>
                        </button>
                        <button className="_feed_inner_timeline_reaction_share _feed_reaction">
                          <span className="_feed_inner_timeline_reaction_link">
                            {" "}
                            <span>
                              <ShareIcon />
                              Share
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="_feed_inner_timeline_cooment_area">
                        <div className="_feed_inner_comment_box">
                          <form className="_feed_inner_comment_box_form">
                            <div className="_feed_inner_comment_box_content">
                              <div className="_feed_inner_comment_box_content_image">
                                <Image
                                  src="/assets/images/comment_img.png"
                                  alt=""
                                  className="_comment_img"
                                />
                              </div>
                              <div className="_feed_inner_comment_box_content_txt">
                                <textarea
                                  className="form-control _comment_textarea"
                                  placeholder="Write a comment"
                                  id="floatingTextarea1"
                                ></textarea>
                              </div>
                            </div>
                            <div className="_feed_inner_comment_box_icon">
                              <button className="_feed_inner_comment_box_icon_btn">
                                <MicIcon />
                              </button>
                              <button className="_feed_inner_comment_box_icon_btn">
                                <CameraIcon />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="_timline_comment_main">
                        <div className="_previous_comment">
                          <button
                            type="button"
                            className="_previous_comment_txt"
                          >
                            View 4 previous comments
                          </button>
                        </div>
                        <div className="_comment_main">
                          <div className="_comment_image">
                            <a
                              href="profile.html"
                              className="_comment_image_link"
                            >
                              <Image
                                src="/assets/images/txt_img.png"
                                alt=""
                                className="_comment_img1"
                              />
                            </a>
                          </div>
                          <div className="_comment_area">
                            <div className="_comment_details">
                              <div className="_comment_details_top">
                                <div className="_comment_name">
                                  <a href="profile.html ">
                                    <h4 className="_comment_name_title">
                                      Radovan SkillArena
                                    </h4>
                                  </a>
                                </div>
                              </div>
                              <div className="_comment_status">
                                <p className="_comment_status_text">
                                  <span>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.{" "}
                                  </span>
                                </p>
                              </div>
                              <div className="_total_reactions">
                                <div className="_total_react">
                                  <span className="_reaction_like">
                                    <ThumbsUpIcon />
                                  </span>
                                  <span className="_reaction_heart">
                                    <HeartIcon />
                                  </span>
                                </div>
                                <span className="_total">198</span>
                              </div>
                              <div className="_comment_reply">
                                <div className="_comment_reply_num">
                                  <ul className="_comment_reply_list">
                                    <li>
                                      <span>Like.</span>
                                    </li>
                                    <li>
                                      <span>Reply.</span>
                                    </li>
                                    <li>
                                      <span>Share</span>
                                    </li>
                                    <li>
                                      <span className="_time_link">.21m</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="_feed_inner_comment_box">
                              <form className="_feed_inner_comment_box_form">
                                <div className="_feed_inner_comment_box_content">
                                  <div className="_feed_inner_comment_box_content_image">
                                    <Image
                                      src="/assets/images/comment_img.png"
                                      alt=""
                                      className="_comment_img"
                                    />
                                  </div>
                                  <div className="_feed_inner_comment_box_content_txt">
                                    <textarea
                                      className="form-control _comment_textarea"
                                      placeholder="Write a comment"
                                      id="floatingTextarea2"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="_feed_inner_comment_box_icon">
                                  <button className="_feed_inner_comment_box_icon_btn">
                                    <MicIcon />
                                  </button>
                                  <button className="_feed_inner_comment_box_icon_btn">
                                    <CameraIcon />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Layout Middle */}
              {/* Right Sidebar */}
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="_layout_right_sidebar_wrap">
                  <div className="_layout_right_sidebar_inner">
                    <div className="_right_inner_area_info _padd_t24  _padd_b24 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                      <div className="_right_inner_area_info_content _mar_b24">
                        <h4 className="_right_inner_area_info_content_title _title5">
                          You Might Like
                        </h4>
                        <span className="_right_inner_area_info_content_txt">
                          <a
                            className="_right_inner_area_info_content_txt_link"
                            href="#0"
                          >
                            See All
                          </a>
                        </span>
                      </div>
                      <hr className="_underline" />
                      <div className="_right_inner_area_info_ppl">
                        <div className="_right_inner_area_info_box">
                          <div className="_right_inner_area_info_box_image">
                            <a href="profile.html">
                              <Image
                                src="/assets/images/Avatar.png"
                                alt="Image"
                                className="_ppl_img"
                              />
                            </a>
                          </div>
                          <div className="_right_inner_area_info_box_txt">
                            <a href="profile.html">
                              <h4 className="_right_inner_area_info_box_title">
                                Radovan SkillArena
                              </h4>
                            </a>
                            <p className="_right_inner_area_info_box_para">
                              Founder & CEO at Trophy
                            </p>
                          </div>
                        </div>
                        <div className="_right_info_btn_grp">
                          <button
                            type="button"
                            className="_right_info_btn_link"
                          >
                            Ignore
                          </button>
                          <button
                            type="button"
                            className="_right_info_btn_link _right_info_btn_link_active"
                          >
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive ">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people1.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Steve Jobs
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Apple
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            {" "}
                            <span>5 minute ago</span>
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people2.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Ryan Roslansky
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Linkedin
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            <OnlineStatusDotIcon />
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people3.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Dylan Field
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Figma
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            <OnlineStatusDotIcon />
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people1.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Steve Jobs
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Apple
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            {" "}
                            <span>5 minute ago</span>
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people2.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Ryan Roslansky
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Linkedin
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            <OnlineStatusDotIcon />
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people3.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Dylan Field
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Figma
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            <OnlineStatusDotIcon />
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people3.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Dylan Field
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Figma
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            <OnlineStatusDotIcon />
                          </div>
                        </div>
                        <div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive">
                          <div className="_feed_right_inner_area_card_ppl_box">
                            <div className="_feed_right_inner_area_card_ppl_image">
                              <a href="profile.html">
                                <Image
                                  src="/assets/images/people1.png"
                                  alt=""
                                  className="_box_ppl_img"
                                />
                              </a>
                            </div>
                            <div className="_feed_right_inner_area_card_ppl_txt">
                              <a href="profile.html">
                                <h4 className="_feed_right_inner_area_card_ppl_title">
                                  Steve Jobs
                                </h4>
                              </a>
                              <p className="_feed_right_inner_area_card_ppl_para">
                                CEO of Apple
                              </p>
                            </div>
                          </div>
                          <div className="_feed_right_inner_area_card_ppl_side">
                            {" "}
                            <span>5 minute ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
