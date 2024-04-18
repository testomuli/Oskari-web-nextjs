
export default async function RequestsVersionPage({
  params,
}: {
  params: { version: string }
}) {

  return <>
    <h1>Requests - {params.version}</h1>
  </>;
}
