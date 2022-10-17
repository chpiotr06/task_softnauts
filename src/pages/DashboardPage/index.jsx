import DefaultLayout from "../../layouts/DefaultLayout";

function DashboardPage() {
  return (
    <DefaultLayout>
      <p>You should be redirected here, after successful login.</p>
      <p>If You can see user's email address in the top right corner - then You succeeded!</p>
      <small>Refresh the page to log out.</small>
    </DefaultLayout>
  )
}

export default DashboardPage;
