export default function NewsItem({author, title, url, totalComments, time}) {
    return (
        <div>
            <h2><a href={url}>{title}</a></h2>
            <p>By {author} | {time} | {totalComments} comments</p>
        </div>
    )
}