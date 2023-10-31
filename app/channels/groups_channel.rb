class GroupsChannel < ApplicationCable::Channel
  def subscribed
    stream_for "groups_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
