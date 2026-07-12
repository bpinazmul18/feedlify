import {
  BookmarksIcon,
  FindFriendsIcon,
  GamingIcon,
  GroupIcon,
  InsightsIcon,
  LearningIcon,
  SavePostIcon,
  SettingsIcon,
} from "@/components/feedlify-icons";

type ExploreItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
};

const EXPLORE_ITEMS: ExploreItem[] = [
  { label: "Learning", href: "#0", icon: LearningIcon, badge: "New" },
  { label: "Insights", href: "#0", icon: InsightsIcon },
  { label: "Find friends", href: "find-friends.html", icon: FindFriendsIcon },
  { label: "Bookmarks", href: "#0", icon: BookmarksIcon },
  { label: "Group", href: "group.html", icon: GroupIcon },
  { label: "Gaming", href: "#0", icon: GamingIcon, badge: "New" },
  { label: "Settings", href: "#0", icon: SettingsIcon },
  { label: "Save post", href: "#0", icon: SavePostIcon },
];

export function Explore() {
  return (
    <div className="_layout_left_sidebar_inner">
      <div className="_left_inner_area_explore _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <h4 className="_left_inner_area_explore_title _title5  _mar_b24">
          Explore
        </h4>
        <ul className="_left_inner_area_explore_list">
          {EXPLORE_ITEMS.map(({ label, href, icon: Icon, badge }) => (
            <li
              key={label}
              className={
                badge
                  ? "_left_inner_area_explore_item _explore_item"
                  : "_left_inner_area_explore_item"
              }
            >
              <a href={href} className="_left_inner_area_explore_link">
                <Icon />
                {label}
              </a>
              {badge && (
                <span className="_left_inner_area_explore_link_txt">
                  {badge}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
