import { DiscussionEmbed } from 'disqus-react';

type Props = {
  url: string;
  title: string;
  id: string;
};

const Comments = ({ url, title, id }: Props) => {
  const disqusShortname = 'lucasmallmann-dev';

  const disqusConfig = {
    url,
    identifier: id,
    title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default Comments;
