module ::YoukuOneboxOverride
  def to_html
    if SiteSetting.zh_l10n_http_onebox_override
      "<iframe width='480' height='270' src='http://player.youku.com/embed/#{video_id}' frameborder='0' allowfullscreen></iframe>"
    else
      super
    end
  end
end

Onebox::Engine::YoukuOnebox.class_eval do
  prepend ::YoukuOneboxOverride
end
