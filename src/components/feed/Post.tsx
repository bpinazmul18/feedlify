import Image from "@/components/ui/Image";
import {
  BookmarkIcon,
  CameraIcon,
  CommentReactionIcon,
  DeleteIcon,
  EditPostIcon,
  HahaReactionIcon,
  HeartIcon,
  HideIcon,
  MicIcon,
  MoreVerticalIcon,
  NotificationBellBlueIcon,
  ShareIcon,
  ThumbsUpIcon,
} from "@/components/feedlify-icons";

export type PostComment = {
  authorName: string;
  authorImage: string;
  text: string;
  totalReactions: number;
  timeAgo: string;
  previousCommentsCount?: number;
};

export type PostData = {
  id: string;
  authorName: string;
  authorImage: string;
  postedAt: string;
  visibility?: string;
  title: string;
  image?: string;
  reactionImages: string[];
  totalReactions: string;
  commentCount: number;
  shareCount: number;
  comment?: PostComment;
};

type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  const {
    id,
    authorName,
    authorImage,
    postedAt,
    visibility = "Public",
    title,
    image,
    reactionImages,
    totalReactions,
    commentCount,
    shareCount,
    comment,
  } = post;

  return (
    <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
      <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
        <div className="_feed_inner_timeline_post_top">
          <div className="_feed_inner_timeline_post_box">
            <div className="_feed_inner_timeline_post_box_image">
              <Image src={authorImage} alt="" className="_post_img" />
            </div>
            <div className="_feed_inner_timeline_post_box_txt">
              <h4 className="_feed_inner_timeline_post_box_title">
                {authorName}
              </h4>
              <p className="_feed_inner_timeline_post_box_para">
                {postedAt} .<a href="#0">{visibility}</a>
              </p>
            </div>
          </div>
          <div className="_feed_inner_timeline_post_box_dropdown">
            <div className="_feed_timeline_post_dropdown">
              <button
                id={`_timeline_show_drop_btn-${id}`}
                className="_feed_timeline_post_dropdown_link"
              >
                <MoreVerticalIcon />
              </button>
            </div>
            {/* Dropdown */}
            <div
              id={`_timeline_drop-${id}`}
              className="_feed_timeline_dropdown _timeline_dropdown"
            >
              <ul className="_feed_timeline_dropdown_list">
                <li className="_feed_timeline_dropdown_item">
                  <a href="#0" className="_feed_timeline_dropdown_link">
                    <span>
                      <BookmarkIcon />
                    </span>
                    Save Post
                  </a>
                </li>
                <li className="_feed_timeline_dropdown_item">
                  <a href="#0" className="_feed_timeline_dropdown_link">
                    <span>
                      <NotificationBellBlueIcon />
                    </span>
                    Turn On Notification
                  </a>
                </li>
                <li className="_feed_timeline_dropdown_item">
                  <a href="#0" className="_feed_timeline_dropdown_link">
                    <span>
                      <HideIcon />
                    </span>
                    Hide
                  </a>
                </li>
                <li className="_feed_timeline_dropdown_item">
                  <a href="#0" className="_feed_timeline_dropdown_link">
                    <span>
                      <EditPostIcon />
                    </span>
                    Edit Post
                  </a>
                </li>
                <li className="_feed_timeline_dropdown_item">
                  <a href="#0" className="_feed_timeline_dropdown_link">
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
        <h4 className="_feed_inner_timeline_post_title">{title}</h4>
        {image && (
          <div className="_feed_inner_timeline_image">
            <Image src={image} alt="" className="_time_img" />
          </div>
        )}
      </div>
      <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
        <div className="_feed_inner_timeline_total_reacts_image">
          {reactionImages.map((reactionImage, index) => (
            <Image
              key={reactionImage + index}
              src={reactionImage}
              alt="Image"
              className={
                index === 0
                  ? "_react_img1"
                  : index <= 2
                    ? "_react_img"
                    : "_react_img _rect_img_mbl_none"
              }
            />
          ))}
          <p className="_feed_inner_timeline_total_reacts_para">
            {totalReactions}
          </p>
        </div>
        <div className="_feed_inner_timeline_total_reacts_txt">
          <p className="_feed_inner_timeline_total_reacts_para1">
            <a href="#0">
              <span>{commentCount}</span> Comment
            </a>
          </p>
          <p className="_feed_inner_timeline_total_reacts_para2">
            <span>{shareCount}</span> Share
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
                  id={`comment-textarea-${id}`}
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
      {comment && (
        <div className="_timline_comment_main">
          {comment.previousCommentsCount && (
            <div className="_previous_comment">
              <button type="button" className="_previous_comment_txt">
                View {comment.previousCommentsCount} previous comments
              </button>
            </div>
          )}
          <div className="_comment_main">
            <div className="_comment_image">
              <a href="profile.html" className="_comment_image_link">
                <Image
                  src={comment.authorImage}
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
                        {comment.authorName}
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="_comment_status">
                  <p className="_comment_status_text">
                    <span>{comment.text}</span>
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
                  <span className="_total">{comment.totalReactions}</span>
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
                        <span className="_time_link">.{comment.timeAgo}</span>
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
                        id={`reply-textarea-${id}`}
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
      )}
    </div>
  );
}
