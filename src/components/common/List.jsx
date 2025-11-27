import bulletPoint from "/assets/images/icon-bullet-point.svg";

export default function List({ content, listTitle, spacing }) {
  const isObj = content.desc || content.title;

  console.log(isObj);
  const space = `space-y-${spacing}`;

  return (
    <section>
      {listTitle && (
        <h4 className="text-preset-4 mb-4 text-neutral-900">{listTitle}:</h4>
      )}
      <ul className={`text-preset-6 ${space} list-disc text-neutral-600`}>
        {content.map((content) => (
          <li key={content.id} className="flex items-start gap-5">
            <img src={bulletPoint} alt="list bullet point" />
            <div>
              {content.title && (
                <h3 className="text-preset-4 text-neutral-900">
                  {content.title}
                </h3>
              )}
              {content.desc && (
                <p className="text-preset-6 text-neutral-600">{content.desc}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
