# Virtual Environments

A virtual environment is created on top of an existing Python installation, known as the virtual environment’s “base” Python, and may optionally be isolated from the packages in the base environment, so only those explicitly installed in the virtual environment are available.

It is quite important because it allows you to separate different package versions of the code. For example, if you are using `scikit-learn` in one experiment, save your model with that version and later try to open the file with a new version, there may be problems when reading the file.

## Available options

You can use several options to create the virtual environments, some examples are:

* [venv](https://docs.python.org/3/library/venv.html)
* [conda](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
* [pyenv](https://github.com/pyenv/pyenv-virtualenv)

In this course, we will be using `venv`.

## Creating virtual environments

Creation of virtual environments is done by executing the command venv:

```bash
python -m venv venv
```

Running this command creates the target directory (creating any parent directories that don’t exist already) and places a pyvenv.cfg file in it with a home key pointing to the Python installation from which the command was run (a common name for the target directory is .venv).

![venv.png](/2-fundamentals-python/images/venv.png)

It also creates a bin (or Scripts on Windows) subdirectory containing a copy/symlink of the Python binary/binaries (as appropriate for the platform or arguments used at environment creation time). It also creates an (initially empty) lib/pythonX.Y/site-packages subdirectory (on Windows, this is Lib\site-packages). If an existing directory is specified, it will be re-used.

![venv1.png](/2-fundamentals-python/images/venv1.png)

### Windows

* Create the `venv`

    ```bash
    python -m venv venv
    ```

* Activate the `myenv`
    Once an environment has been created, you may wish to activate it, e.g. by sourcing an activate script in its bin directory.

    ```bash
    <myvenv>\Scripts\activate.ps1
    ```

    ![venv_activate.png](/2-fundamentals-python/images/venv_activate.png)

    

### Mac

* `cd` to your project directory and run `venv` to create the new virtual environment.

* The following commands will create a new virtual environment under my-project/my-venv.

    ```bash
    cd my-project
    python3.11 -m venv venv
    ```

* Activate the `venv`
    Now that we have a virtual environment, we need to activate it.

    ```bash
    source venv/bin/activate
    ```

## Install libraries

Requirements files serve as a list of items to be installed by pip, when using pip install. Files that use this format are often called `requirements.txt`, since requirements.txt is usually what these files are named (although, that is not a requirement). Check [this](https://pip.pypa.io/en/stable/reference/requirements-file-format/) out to learn more about it.

For this section, ensure you have activated the virtual environment, and create a `requirements.txt` file in the `2-python-fundamentals/virtual-environments/script` directory, then, copy and paste the following code and save the file:

```bash
scikit-learn==1.2.2
```

Once the file is created, run the following command to install the required libraries within the virtual environment:

```bash
pip install -r 2-python-fundamentals/virtual-environments/script/requirements.txt
```

After the installation, verify it by running this command:

```bash
pip freeze
```

![pipfreeze](/2-fundamentals-python/images/pipfreeze.png)

You should see something like this:

```bash
joblib==1.3.2
numpy==1.26.2
scikit-learn==1.2.2
scipy==1.11.4
threadpoolctl==3.2.0
```

(There may be some variation in the libraries depending on the version of 'Python')

## Run the script

Once you have activated your virtual environment and installed the requirements, just run the command as follows:

```bash
python 2-python-fundamentals/virtual-environments/script/svr.py 
```

You should see something like this:

```bash
[1.5]
```

Congrats! You have run your first script using a virtual environment on a local computer.

![run_script](/2-fundamentals-python/images/run_script.png)


# Visual Studio Code Notebooks

## What are VSC Notebooks?

Visual Studio Code (VSC) Notebooks provide a convenient environment for writing and executing code directly within the Visual Studio Code editor. Key features include:

- **Zero Configuration**: No complex setup needed. VSC Notebooks seamlessly integrate with Visual Studio Code, requiring minimal configuration.

- **Access to GPUs**: Depending on your system and configurations, you can leverage GPU capabilities for accelerated computations.

- **Easy Sharing**: Collaborate effortlessly by sharing your notebooks, code, and analyses with others directly within Visual Studio Code.

Whether you're a student, data scientist, or developer, VSC Notebooks streamline your workflow. Check out the following [introductory guide](/2-fundamentals-python/2.1-virtual-environments/demo/svr.ipynb) to understand more about Visual Studio Code Notebooks and how they can improve your coding experience.

![svr](/2-fundamentals-python/images/svr.png)

- We select the 'KERNEL'

![kernel](/2-fundamentals-python/images/kernel.png)

- Later the option: 'Python Environments'

![environments](/2-fundamentals-python/images/environments.png)

- Here we will have a window that will show us the available Python environments, in this exercise we will select the environment that we created in our virtual environment.

![venv_python](/2-fundamentals-python/images/venv_python.png)

- Now everything that is executed in this notbook will be done through the version of python that we have in our virtual environment, we click on the 'Run All' button.

![venv_python2](/2-fundamentals-python/images/venv_python2.png)

- It is very likely that in order to run this notebook it is necessary to install more packages, we select the 'Install' button and wait for the necessary packages to download. We can review again through the ***pip freeze*** the new libraries that were downloaded.

![new_libraries](/2-fundamentals-python/images/new_libraries.png)

- Finally we can check that the notebook was executed and in the final part we have the expected result:

![script_colab](/2-fundamentals-python/images/script_colab.png)

To deactivate the virtual environment we just execute the following command:

```bash
deactivate
```

![deactivate](/2-fundamentals-python/images/deactivate.png)

# Google Colab

## What is Colab?

Colab, or "Colaboratory", allows you to write and execute Python in your browser, with

* Zero configuration required
* Access to GPUs free of charge
* Easy sharing

Whether you're a student, a data scientist or an AI researcher, Colab can make your work easier. Watch [Introduction to Colab](https://www.youtube.com/watch?v=inN8seMm7UI) to learn more.

### Intro to Colab

1. **Open Google Colab:**
     - Go to [Google Colab](https://colab.research.google.com/).

2. **Authenticate to Google Colab:**
     - It is necessary to log in with our Google Email to be able to work in the environment that Google Colab offers us.

     ![colab4](/2-fundamentals-python/images/colab4.png)

     ![colab2](/2-fundamentals-python/images/colab2.png)

     ![colab3](/2-fundamentals-python/images/colab3.png)

3. **Activate the runtime environment:**

    - Enabling the runtime in Google Colab provides the resources needed to run code efficiently, take advantage of GPUs, collaborate in real time, and facilitate persistence of results in a cloud-based environment.

    ![colab5](/2-fundamentals-python/images/colab5.png)

    - In the top right corner of your Colab notebook, you should see a status bar. If it is active, you will see an indicator showing "Connected" and information about the current execution environment (for example, if you are using a GPU).

    ![colab6](/2-fundamentals-python/images/colab6.png)

4. **Execute 'svr.ipynb' code in a cell:**
     - Select the 'File' option from the menu and then 'Open a notebook'

     ![colab61](/2-fundamentals-python/images/colab61.png)

     - A window will open in which we will have several options to open a notebook and we will select the 'GitHub' option:

     ![colab7](/2-fundamentals-python/images/colab7.png)

     - We will go to the GitHub repository to search for the link of the 'svr.ipynb' file and paste it into the Google Colab search area:

     ![git](/2-fundamentals-python/images/git.png)

     ![git2](/2-fundamentals-python/images/git2.png)

     ![colab8](/2-fundamentals-python/images/colab8.png)

     - Finally, in the menu we look for the 'Execution environment' option and select the 'Run all' option.

     ![colab9](/2-fundamentals-python/images/colab9.png)

     - We will be able to notice at the end of the notebook that we obtain the expected result.

     ![colab10](/2-fundamentals-python/images/colab10.png)