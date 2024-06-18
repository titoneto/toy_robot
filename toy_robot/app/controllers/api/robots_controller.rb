class Api::RobotsController < ApplicationController
  before_action :set_robot, only: %i[move left right]
  protect_from_forgery with: :null_session

  def move
    if @robot.move
      render json: { robot: @robot }
    else
      render json: { error: 'Invalid move' }, status: :unprocessable_entity
    end
  end

  def left
    @robot.turn_left
    render json: { robot: @robot }
  end

  def right
    @robot.turn_right
    render json: { robot: @robot }
  end

  def place
    x = params[:x]
    y = params[:y]
    facing = params[:facing]
    @robot = Robot.instance(x: x, y: y, facing: facing)

    if @robot.persisted?
      render json: { status: 'success', robot: @robot }
    else
      render json: { status: 'error', message: 'Failed to place robot' }, status: :unprocessable_entity
    end
  end

  def destroy
    @robot.destroy!
    head :ok
  end

  private

  def set_robot
    @robot = Robot.first
    return if @robot

    render json: { error: 'Robot not found' }, status: :not_found
  end
end
