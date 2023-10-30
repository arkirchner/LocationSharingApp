class GroupsController < ApplicationController
  def create
    Group.create

    redirect_to groups_path
  end

  def show
    @group = Group.find(params[:id])
  end

  def index
    @groups = Group.all
  end
end
