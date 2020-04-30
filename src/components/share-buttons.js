import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,

  LinkedinShareButton,
  LinkedinIcon,

  TwitterShareButton,
  TwitterIcon,

  WhatsappShareButton,
  WhatsappIcon,

  RedditShareButton,
  RedditIcon,

  EmailShareButton,
  EmailIcon,

  PocketShareButton,
  PocketIcon
} from 'react-share'

const size = 28

const ShareButtons = ({url, title, tags}) => (
  <div className="mb-3">
    <span className="mr-1 text-gray-800 text-sm hidden sm:block">Share this Article:</span>
    
    <div>
      <FacebookShareButton url={url} className="mr-1">
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via="hashtagcoder" hashtags={tags} className="mr-1">
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} className="mr-1">
        <LinkedinIcon size={size} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} className="mr-1">
        <RedditIcon size={size} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title} className="mr-1">
        <WhatsappIcon size={size} round={true} />
      </WhatsappShareButton>

      <EmailShareButton url={url} subject={title} className="mr-1">
        <EmailIcon size={size} round={true} />
      </EmailShareButton>

      <PocketShareButton url={url} title={title}>
        <PocketIcon size={size} round={true} />
      </PocketShareButton>
    </div>
  </div>
)

export default ShareButtons