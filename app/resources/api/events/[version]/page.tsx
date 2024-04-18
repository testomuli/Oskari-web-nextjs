
export default async function EventsVersionPage({
  params,
}: {
  params: { version: string }
}) {

  return <>
    <h1>Events - {params.version}</h1>
  </>;
}
