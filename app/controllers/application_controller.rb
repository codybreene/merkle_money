class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def login(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        redirect_to 'api/session' unless logged_in?
    end

end
