package edu.wctc;

public class Rectangle {
    //instance fields
    private int length;
    private int width;

    public Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    //overload constructor
    public Rectangle() {
        length = -1;
        width = -1;
    }

    // getter (accessor)
    // one job: return the data
    public int getLength() {
        return length;
    }

    // setter (mutator)
    // one* job: modify instance field
    //  *optionally do input validation
    public void setLength(int length) {
        if (length > 0) {
            this.length = length;
        }
    }

    public void setLength(double length) {
        //provides flexibility in our application
        //casting will truncate, not round
        this.length = (int) length;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }
}
