module Onebox
  module Engine
    class CloudMusicOnebox
      include Engine
      include StandardEmbed
      include HTML

      matches_regexp(/^https?:\/\/music\.163\.com\/#(\/m)?\/song\?id=([\d]+)(&userid=[\d]+)?$/)

      def music_id
        match = uri.fragment.match(/\/song\?id=([\d]+)/)
        return match[1] if match && match[1]

        nil
      rescue
        return nil
      end

      def to_html
        "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"http://music.163.com/outchain/player?type=2&id=#{music_id}&auto=0&height=66\"></iframe>"
      end

      def placeholder_html
        to_html
      end
    end
  end
end
