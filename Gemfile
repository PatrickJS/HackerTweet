source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '4.0.0.beta1'
# gem 'jquery-turbolinks'
gem 'jquery-rails'
# gem 'turbolinks' # Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'jbuilder', '~> 1.0.1' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'unicorn' # Use unicorn as the app server
gem 'bootstrap-sass'
# gem 'font-awesome-sass-rails'
# gem 'simple_form'
# gem 'haml-rails'
gem 'pusher'

group :test, :development do
  gem "rspec-rails", "~> 2.0"
  gem 'sqlite3'
  gem 'guard'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'guard-bundler'
  # gem 'guard-webrick'
  gem 'guard-zeus'
  # gem 'guard-livereload', :require => false
  # gem 'rack-livereload'
  gem 'rb-fsevent',       :require => false
  gem 'ruby_gntp'  # growl
end

group :development do
  # gem 'meta_request'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'quiet_assets'
end

group :production do
  gem 'pg'
  gem 'rack-google_analytics', :require => 'rack/google_analytics'
  gem 'newrelic_rpm'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 4.0.0.beta1'
  gem 'coffee-rails', '~> 4.0.0.beta1'
  # gem 'therubyracer', platforms: :ruby # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'uglifier', '>= 1.0.3'
end
