// botSettings.js

export const default_settings = {
    login:                  '',
    password:               '',
    like_per_day:           1000,
    comments_per_day:       0,
    tag_list:               ['follow4follow', 'f4f', 'cute'],
    tag_blacklist:          ['rain', 'thunderstorm'],
    user_blacklist:         {},
    max_like_for_one_tag:   50,
    follow_per_day:         300,
    follow_time:            60,
    unfollow_per_day:       300,
    unfollow_break_min:     15,
    unfollow_break_max:     30,
    log_mod:                1,
    log_file_name:          '',
    proxy:                  '',
    unwanted_username_list: [
        'second', 'stuff', 'art', 'project', 'love', 'life', 'food', 'blog',
        'free', 'keren', 'photo', 'graphy', 'indo', 'travel', 'art', 'shop',
        'store', 'sex', 'toko', 'jual', 'online', 'murah', 'jam', 'kaos',
        'case', 'baju', 'fashion', 'corp', 'tas', 'butik', 'grosir', 'karpet',
        'sosis', 'salon', 'skin', 'care', 'cloth', 'tech', 'rental', 'kamera',
        'beauty', 'express', 'kredit', 'collection', 'impor', 'preloved',
        'follow', 'follower', 'gain', '.id', '_id', 'bags'
    ],
    unfollow_whitelist:     ['example_user_1', 'example_user_2']
};

export class BotSettings {
  constructor(settings) {
    this.login                  = settings.login,
    this.password               = settings.password,
    this.like_per_day           = settings.like_per_day,
    this.comments_per_day       = settings.comments_per_day,
    this.tag_list               = settings.tag_list,
    this.tag_blacklist          = settings.tag_blacklist,
    this.user_blacklist         = settings.user_blacklist,
    this.max_like_for_one_tag   = settings.max_like_for_one_tag,
    this.follow_per_day         = settings.follow_per_day,
    this.follow_time            = settings.follow_time,
    this.unfollow_per_day       = settings.unfollow_per_day,
    this.unfollow_break_min     = settings.unfollow_break_min,
    this.unfollow_break_max     = settings.unfollow_break_max,
    this.log_mod                = settings.log_mod,
    this.log_file_name          = settings.log_file_name,
    this.proxy                  = settings.proxy,
    this.unwanted_username_list = settings.unwanted_username_list,
    this.unfollow_whitelist     = settings.unfollow_whitelist
  }
}
