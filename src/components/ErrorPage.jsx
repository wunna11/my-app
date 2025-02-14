export default function ErrorPage({error, resetErrorBoundary}) {
  return (
    <div>
      <p>Error Page { error.message }</p>
    </div>
  )
}