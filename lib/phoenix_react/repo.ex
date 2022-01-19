defmodule PhoenixReact.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_react,
    adapter: Ecto.Adapters.Postgres
end
